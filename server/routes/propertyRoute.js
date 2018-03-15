const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const multer = require('multer');
const csvtojson = require('csvtojson')
const fs = require('fs');
const xlsxj = require("xlsx-to-json");
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");
const parseXlsx = require('excel');
const xlsx2json = require('xlsx-json');
var mongoose = require('mongoose');
var mongojs = require('mongojs');
var config = require('../../config/main.json');
var mongo = require('mongodb').MongoClient;
var db = mongojs(config.connectionString);
//var db = mongojs('mongodb://localhost:27017/mean', ['data']);
var jsonfile = require('jsonfile')
const accountSid = 'ACa0f88cfda5af6f8d596058afecccba33';
const authToken = '261ba34e95634f7ee58dcc5be021a530';
const client = require('twilio')(accountSid, authToken);
var XLSX = require('xlsx')
var User = require('../model/user');
var _ = require('lodash');
var Promise = require('promise');
var q = require('q');
const async=require('async');
var phase_array = [];
var phase_json = {};
var tower_array = [];
var twx_array = [];
var tower_json = {};
var flat_array = [];
var flat_json = {};

var main_array = [];

var inserted_json = {};

var status = "Active"
var count_array = [];
var pp;
var prop_id;
var no = 1;
var abc=[];
function removeDuplicates(originalArray, objKey) {
  var value;
  var trimmedArray = [];
  var values = [];
  for (var i = 0; i < originalArray.length; i++) {
    value = originalArray[i][objKey];

    if (values.indexOf(value) === -1) {
      trimmedArray.push(originalArray[i]);
      values.push(value);
    }
  }
  //console.log('trimmed array:::'+JSON.stringify(trimmedArray))
  return trimmedArray;

}

var current_date = new Date();
var temp_file_name = current_date.valueOf().toString();
console.log(temp_file_name);
var t_name = '';
var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, temp_file_name + '_' + file.originalname);
    t_name = temp_file_name + '_' + file.originalname;
  }
});

var upload = multer({storage: storage});
var image_path;


router.post("/uploadExcelProcessForProperty", upload.array("uploads[]", 12), function (req, res) {
  pp = './uploads/' + t_name;
  var temp_array = [];
  var work_book = XLSX.readFile(pp);
  var sheet_name_list = work_book.SheetNames;
  var xl_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name_list[0]]);
  var xl_data_header = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name_list[0]], {header: 1});
  console.log('session_id>>>>>>>' + req.session.user);
  if(_.includes(JSON.stringify(xl_data_header[0]), 'Services Type')){
    console.log('22222222222')
    res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
    return;
  }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Is Manager (only one can be the manager)')) {
    console.log('33333333333333')
    res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
    return;
  }else{
    var updateArray =[];
    var insertArray = [];
    for (var key in xl_data) {
      if (xl_data.hasOwnProperty(key)) {
        if (xl_data[key]['id']) {
          console.log('inside if::::::::');
          //console.log('Phase------->>>>' + xl_data[0]['Phase'])
         // console.log('Tower------->>>>' + xl_data[0]['Tower'])
         // console.log('Flat------->>>>' + xl_data[0]['Flat'])
        //  console.log(xl_data[key]['id']+'Flat------->>>>' + xl_data[key]['id'])
        //  console.log('Flat------->>>>' + JSON.stringify(xl_data[key]))

          removeDuplicates(xl_data, 'Flat');
          db.property.find({user_id: req.session.user}).toArray(function (err, property_data) {
            if (err) {
              return err;
            }else{
              var valid_data_array = [];
              /!*-----filter only the data which Flat field has  valid value-----*!/
              for (var k = 0; k < xl_data.length; k++) {
                if (!(xl_data[k]['Flat'] == undefined || xl_data[k]['Flat'] == null || xl_data[k]['Flat'] == '')) {
                  valid_data_array.push(xl_data[k]);
                }
              }
              var groupedPhaseList = _.groupBy(valid_data_array, function (item) {
                return item.Phase;
              });
              var groupedIdList = _.groupBy(valid_data_array, function (item) {
                return item.Phase;
              });
              var idList = [];
              var phaseList = [];
              var towerList = [];
              var flatList = [];
              var finalList = [];
              var counter = 0;
              for (var phase in groupedPhaseList) {
                var ph_id = new ObjectID();
                var abc = 1;
                var phase_id_integrated = property_data[0].property_id + '_' + 'PH-' + parseInt(Math.floor((Math.random() * 1000000) + 1)) + 1;
                console.log("phasephase>>>>"+phase);
                phaseList.push({phase: phase == "undefined" ? '' : phase, _id: ph_id, phase_id: phase_id_integrated});
                var groupedTowerList = _.groupBy(groupedPhaseList[phase], function (item) {
                  return item.Tower;
                });

                for (var tower in groupedTowerList) {
                  var tower_id = new ObjectID();
                  var tower_id_integrated = property_data[0].property_id + '_' + 'TW-' + parseInt(Math.floor((Math.random() * 1000000) + 1)) + 1;
                  towerList.push({
                    parent_id: ph_id,
                    phase_id: phase_id_integrated,
                    _id: tower_id,
                    tower: tower == "undefined" ? '' : tower,
                    tower_id: tower_id_integrated
                  })

                  var groupedFlatList = _.groupBy(groupedTowerList[tower], function (item) {
                    return item.Flat;
                  });
                  for (var flat in groupedFlatList) {
                        console.log('flat>>>>>>>>',JSON.stringify(flat));
                    var flat_primary_id = new ObjectID();
                    flatList.push({
                      _id:groupedFlatList[flat][0]['id'] || flat_primary_id ,
                      parent_id_phase: ph_id,
                      parent_id_tower: tower_id,
                      phase_id: phase_id_integrated,
                      tower_id: tower_id_integrated,
                      phase_name: phase == "undefined" ? '' : phase,
                      tower_name: tower == "undefined" ? '' :tower,
                      flat_no: flat,
                      flat_id: groupedFlatList[flat][0]['Flat Id'] || property_data[0].property_id + '_' + 'FT-' + parseInt(Math.floor((Math.random() * 1000000) + 1)) + 1,
                      room: groupedFlatList[flat][0].Rooms
                    })
                  }
                }
              }
              db.property.update({user_id: req.session.user}, {$set: {user_id: req.session.user, phase: phaseList, tower: towerList, flat: flatList}}, function (err, result) {
                if (err) {
                  return err;
                } else {
                  fs.unlink(pp, function (err, delete_path) {
                    if (err) {
                      return err;
                    } else {
                     // console.log("file deleted successfully!!!")
                      //res.json({save: true, message: 'data updated successful'})
                    }

                  })
                }
              });
            }




          });
        }
        else {
          /*if (xl_data_header[0].length > 6 ) {
            return res.json({save: false, message: 'Your Excel sheet does not have exact number of headers.'})
          }*/
          if(_.includes(JSON.stringify(xl_data_header[0]), 'Phone Number')){
            console.log('1111111')
            res.json({save: false, message: 'upload failed.Invalid Excel Sheet'});
            return;
          }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Is Manager (only one can be the manager)')){
            console.log('22222222')
            res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
            return;
          }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Services Type')) {
            console.log('33333333333')
            res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
            return;
          }else{
          //  console.log('inside else::::::::'+req.session.user);
            //  console.log('Phase------->>>>' + xl_data[0]['Phase'])
            //console.log('Tower------->>>>' + xl_data[0]['Tower'])
            //  console.log('Flat------->>>>' + xl_data[0]['Flat'])
            removeDuplicates(xl_data, 'Flat');
            db.property.find({user_id: req.session.user}).toArray(function (err, property_data) {
              if (err) {
                return err;
              }
              var valid_data_array = [];
              /!*-----filter only the data which Flat field has  valid value-----*!/
              for (var k = 0; k < xl_data.length; k++) {
                if (!(xl_data[k]['Flat'] == undefined || xl_data[k]['Flat'] == null || xl_data[k]['Flat'] == '')) {
                  valid_data_array.push(xl_data[k]);
                }
              }
              var groupedPhaseList1 = _.groupBy(valid_data_array, function (item) {
                return item.Phase;
              });
              var groupedIdList = _.groupBy(valid_data_array, function (item) {
                return item.Phase;
              });
              var idList = [];
              var phaseList1 = [];
              var towerList1 = [];
              var flatList1 = [];
              var finalList1 = [];
              var counter = 0;
              for (var phase in groupedPhaseList1) {
                var ph_id = new ObjectID();
                var abc = 1;
                var phase_id_integrated = property_data[0].property_id + '_' + 'PH-' + parseInt(Math.floor((Math.random() * 1000000) + 1)) + 1;
                console.log("phasephase>>>>"+phase);
                phaseList1.push({phase: phase == "undefined" ? '' : phase, _id: ph_id, phase_id: phase_id_integrated});
                var groupedTowerList1 = _.groupBy(groupedPhaseList1[phase], function (item) {
                  return item.Tower;
                });

                for (var tower in groupedTowerList1) {
                  var tower_id = new ObjectID();
                  var tower_id_integrated = property_data[0].property_id + '_' + 'TW-' + parseInt(Math.floor((Math.random() * 1000000) + 1)) + 1;
                  towerList1.push({
                    parent_id: ph_id,
                    phase_id: phase_id_integrated,
                    _id: tower_id,
                    tower: tower == "undefined" ? '' : tower,
                    tower_id: tower_id_integrated
                  })

                  var groupedFlatList1 = _.groupBy(groupedTowerList1[tower], function (item) {
                    return item.Flat;
                  });
                  for (var flat in groupedFlatList1) {
                    flatList1.push({
                      _id: groupedFlatList1[flat][0]['id'] || new ObjectID(),
                      parent_id_phase: ph_id,
                      parent_id_tower: tower_id,
                      phase_id: phase_id_integrated,
                      tower_id: tower_id_integrated,
                      phase_name: phase == "undefined" ? '' : phase,
                      tower_name: tower== "undefined" ? '' : tower,
                      flat_no: flat,
                      flat_id: groupedFlatList1[flat][0]['Flat Id'] || property_data[0].property_id + '_' + 'FT-' + parseInt(Math.floor((Math.random() * 1000000) + 1)) + 1,
                      room: groupedFlatList1[flat][0].Rooms
                    })
                  }
                }
              }

              console.log('flat:::::::::::::::::::::::::::::::::::::::::cool::::::::::::'+JSON.stringify(flatList1))
              db.property.update({user_id: req.session.user}, {$set: {user_id: req.session.user, phase: phaseList1, tower: towerList1, flat: flatList1}}, function (err, result) {
                if (err) {
                  return err;
                } else {
                  fs.unlink(pp, function (err, delete_path) {
                    if (err) {
                      return err;
                    } else {
                     // console.log("file deleted successfully!!!")
                      //res.json({save: true, message: 'data updated successful'})
                    }

                  })
                }
              });
            });
          }

        }

      }
    }
    res.json({save: true, message: 'data updated successful'})
  }

 /* db.property.find({property_id: 'P-2'}).toArray(function (err, property_data) {
    if (err) {
      return err;
    }
      if (xl_data_header[0].length > 5 || xl_data_header[0].length < 5) {
        return res.json({save: false, message: 'Your Excel sheet does not have exact number of headers.'})
      }
      var valid_data_array = [];
      /!*-----filter only the data which Flat field has  valid value-----*!/
      for (var k = 0; k < xl_data.length; k++) {
        if (!(xl_data[k]['Flat'] == undefined || xl_data[k]['Flat'] == null || xl_data[k]['Flat'] == '')) {
          valid_data_array.push(xl_data[k]);
        }
      }
      var groupedPhaseList = _.groupBy(valid_data_array, function (item) { return item.Phase; });
      var groupedIdList = _.groupBy(valid_data_array, function (item) {
        return item.Phase;
      });
      var idList = [];
      var phaseList = [];
      var towerList = [];
      var flatList = [];
      var finalList = [];
      var counter=0;
        for (var phase in groupedPhaseList) {
          var ph_id = new ObjectID();
          var abc = 1;
           var phase_id_integrated=property_data[0].property_id+'_'+'PH-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
           phaseList.push({phase: phase, _id: ph_id,phase_id:phase_id_integrated});
          var groupedTowerList = _.groupBy(groupedPhaseList[phase], function (item) {
            return item.Tower;
          });

          for (var tower in groupedTowerList) {
              var tower_id = new ObjectID();
              var tower_id_integrated=property_data[0].property_id+'_'+'TW-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
               towerList.push({ parent_id: ph_id,phase_id:phase_id_integrated, _id: tower_id, tower: tower,tower_id:tower_id_integrated})

              var groupedFlatList = _.groupBy(groupedTowerList[tower], function (item) {
                return item.Flat;
              });
            for (var flat in groupedFlatList) {
              var flat_primary_id = new ObjectID();
              flatList.push({
                _id:flat_primary_id,
                parent_id_phase: ph_id,
                parent_id_tower: tower_id,
                phase_id:phase_id_integrated,
                tower_id:tower_id_integrated,
                phase_name:phase,
                tower_name:tower,
                flat_no: flat,
                flat_id:property_data[0].property_id+'_'+'FT-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1,
                room: groupedFlatList[flat][0].Rooms
              })
            }
          }
        }


    db.property.update({property_id: 'P-2'}, {$set: {user_id:req.session.user, phase: phaseList, tower: towerList, flat: flatList}}, function (err, result) {
      if (err) {
        return err;
      } else {
        fs.unlink(pp, function (err, delete_path) {
          if (err) {
            return err;
          } else {
            console.log("file deleted successfully!!!")
            res.json({save: true,message:'data updated successful'})
          }

        })
      }
    });
  });*/
});



module.exports = router;
