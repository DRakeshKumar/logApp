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
var main_array = [];
var main_array_flat = [];


//var inserted_json = {};
//var inserted_array = [];
var status = "Active"
var count_array = [];
var count_records_array = [];
var pp;
var prop_id;
var no = 1;

// Connect



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

router.put("/uploadResident", upload.array("uploads[]", 12), function (req, res) {
  console.log('================>>>>inside new parser:::::')
  var sheetData = [];
  pp = './uploads/' + t_name;
  var count=1;
});
router.post("/uploadExcelProcessForResident", upload.array("uploads[]", 12), function (req, res) {
  console.log('files####', req.files);
  var sheetData = [];
  pp = './uploads/' + t_name;
  var count=1;
  var id_array=[];
  db.property.findOne({"user_id":req.session.user},function (err, data) {
    if(err){
      return err;
    }else{
      db.user.find({property_id:data.property_id}).toArray(function (err, full_data) {
        if (err) {
          console.log(err);
          return err;
        } else {

          var temp_array_update = [];
          var work_book = XLSX.readFile(pp);
          var sheet_name_list = work_book.SheetNames;
          var xl_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name_list[0]]);
          var xl_data_header = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name_list[0]], {header: 1});
          console.log(xl_data_header[0][5] + 'xl_data_header::::' + JSON.stringify(xl_data_header[0]))
          /*if (full_data.length == 0) {
            /!*-----used to remove duplicates from xlsx file first-----*!/
            /!* if (xl_data_header[0].length > 7) {
               return res.json({save: false, message: 'Your Excel sheet does not have exact number of headers.Invalid Header Row Format.Invalid Row Format'})
             }*!/
            var temp_array = [];
            function removeDuplicates(originalArray, objKey) {
              var value;
              var trimmedArray = [];
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
            var u_array=removeDuplicates(xl_data, 'Phone Number');
            for (var k = 0; k < trimmedArray.length; k++) {
              if (!(u_array[k]['Phone Number'] == undefined || u_array[k]['Phone Number'] == null || u_array[k]['Phone Number'] == '')) {
                temp_array.push(u_array[k]);
              }
            }
            console.log('temp_array::::::'+JSON.stringify(temp_array))
            var json_string = JSON.stringify(temp_array);
            var json_data = JSON.parse(json_string);
            var inserted_array=[];
            for (var key in temp_array) {
              if (temp_array.hasOwnProperty(key)) {
                //console.log(temp_array[key]['ID'])
                var inserted_json = {
                  // id: temp_array[key]['ID'] == undefined ? "" : temp_array[key]['ID'],
                  property_id:data.property_id,
                  first_name: temp_array[key]['First Name'] == undefined ? "" : temp_array[key]['First Name'],
                  last_name: temp_array[key]['Last Name'] == undefined ? "" : temp_array[key]['Last Name'],
                  phone_number: temp_array[key]['Phone Number'] == undefined ? "" : temp_array[key]['Phone Number'],
                  email_id: temp_array[key]['Email Id'] == undefined ? "" : temp_array[key]['Email Id'],
                  is_manager: temp_array[key]['Is Manager (only one can be the manager)'] == undefined ? "" : temp_array[key]['Is Manager (only one can be the manager)'],
                  request_types: temp_array[key]['Request Types'] == undefined ? "" : temp_array[key]['Request Types'],
                  flat_id: temp_array[key]['Flat Id'] == undefined ? "" : temp_array[key]['Flat Id'],
                  Active: temp_array[key]['Active'] == undefined ? "" : temp_array[key]['Active'],
                  status: status,
                  user_type:"Resident",
                  created_on: new Date()
                }
                inserted_array.push(inserted_json)
              }

            }
            db.user.save(inserted_array,function (err, result) {
              if(err){
                return err;
              }else{
                fs.unlink(pp, function (err, result) {
                  if (err) {
                    return err;
                  } else {
                    console.log("file deleted successfully!!!")
                    res.json({save: true,message:'data updated successful', invalid_row: count_array, valid_row:inserted_array.length})
                  }

                })
              }

            });
          }*/
         // else {
            /*-----used to remove duplicates from xlsx file first-----*/

            /*--------------------------------------------------------------*/
            /* if (xl_data_header[0].length > 7) {
               return res.json({save: false, message: 'Your Excel sheet does not have exact number of headers.Invalid Row Format'})
             }*/
            if(_.includes(JSON.stringify(xl_data_header[0]), 'Is Manager (only one can be the manager)')){
              console.log('1111111')
              res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
              return;
            }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Tower')){
              console.log('22222222')
              res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
              return;
            }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Services Type')){
              console.log('33333333333')
              res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
              return;
            } else{
              var count = 0;
              var count_records = 0;
              var values = [];

              console.log('>>>>>>>>>>>>>>>>>>>>'+JSON.stringify(xl_data))
              function removeDuplicates(originalArray, objKey) {
                var value;
                var trimmedArray = [];
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
              count_records++;
              var u_array=  removeDuplicates(xl_data, 'Phone Number');
              var temp_array = [];
              /*-----filter only the data which Phone number field has value-----*/
              for (var k = 0; k < u_array.length; k++) {
                if (!(u_array[k]['Phone Number'] == undefined || u_array[k]['Phone Number'] == null || u_array[k]['Phone Number'] == '')) {
                  temp_array.push(u_array[k]);
                }
              }


              /*-----loop to iterate and compare both Array and remove the duplicate objects-----*/
              if(temp_array.length==0){
                console.log('temp_array:::::::::::::::::::::::::::::::::::::::::'+JSON.stringify(temp_array));
                res.json({save: false, message: 'all records are matched with existing record.'})
              }else{
                var inserted_array = [];
                for (var key in temp_array) {
                  if (temp_array.hasOwnProperty(key)) {
                    // console.log("just checking",arrayOfObjAfter)
                    inserted_json = {};
                    if(temp_array[key]['id']){
                      var query_data={
                        first_name: temp_array[key]['First Name'] == undefined ? "" : temp_array[key]['First Name'],
                        last_name: temp_array[key]['Last Name'] == undefined ? "" : temp_array[key]['Last Name'],
                        phone_number: temp_array[key]['Phone Number'] == undefined ? "" : temp_array[key]['Phone Number'],
                        email_id: temp_array[key]['Email Id'] == undefined ? "" : temp_array[key]['Email Id'],
                        is_manager: temp_array[key]['Is Manager (only one can be the manager)'] == undefined ? "" : temp_array[key]['Is Manager (only one can be the manager)'],
                        request_types: temp_array[key]['Request Types'] == undefined ? "" : temp_array[key]['Request Types'],
                        flat_id: temp_array[key]['Flat Id'] == undefined ? "" : temp_array[key]['Flat Id'],
                        Active: temp_array[key]['Active'] == undefined ? "" : temp_array[key]['Active'],
                        status: status,
                        user_type:"Resident",
                        created_on: new Date()
                      }
                      id_array.push(query_data);
                      db.user.update({_id:ObjectID(temp_array[key]['id'])},{$set: query_data},function (err,data) {
                        if (err){
                          return err;
                        }else{
                          console.log('inside if::::::::::'+JSON.stringify(data))
                         /* res.json({
                            save: true,
                            message: 'data inserted successful'
                          });*/
                        }

                        //inserted_array.push(inserted_json)
                      });
                    }
                    else {
                      console.log('inside else::::::::::::::')
                      console.log('temp_array>>>>>>'+JSON.stringify(temp_array.length));
                      console.log('main_array>>>>>>'+JSON.stringify(main_array.length));

                      var inserted_json = {
                        // id: temp_array[key]['ID'] == undefined ? "" : temp_array[key]['ID'],
                        property_id:data.property_id,
                        first_name: temp_array[key]['First Name'] == undefined ? "" : temp_array[key]['First Name'],
                        last_name: temp_array[key]['Last Name'] == undefined ? "" : temp_array[key]['Last Name'],
                        phone_number: temp_array[key]['Phone Number'] == undefined ? "" : temp_array[key]['Phone Number'],
                        email_id: temp_array[key]['Email Id'] == undefined ? "" : temp_array[key]['Email Id'],
                        is_manager: temp_array[key]['Is Manager (only one can be the manager)'] == undefined ? "" : temp_array[key]['Is Manager (only one can be the manager)'],
                        request_types: temp_array[key]['Request Types'] == undefined ? "" : temp_array[key]['Request Types'],
                        flat_id: temp_array[key]['Flat Id'] == undefined ? "" : temp_array[key]['Flat Id'],
                        Active: temp_array[key]['Active'] == undefined ? "" : temp_array[key]['Active'],
                        status: status,
                        user_type:"Resident",
                        created_on: new Date()
                      }
                      inserted_array.push(inserted_json)

                    }
                    //console.log("response", inserted_json);


                  }
                }
                var duplicateCount =0 ;
                var duplicateArray=[];
                for (var i = 0, len = full_data.length; i < len; i++) {
                  for (var j = 0, len_xl = inserted_array.length; j < len_xl; j++) {
                    if (full_data[i]['phone_number'] === inserted_array[j]['phone_number']) {
                      duplicateArray.push(inserted_array[j]);
                      inserted_array.splice(j, 1);
                      len_xl = inserted_array.length;
                     // main_array.push(inserted_array);
                      duplicateCount++;
                    }
                  }
                }
                console.log(duplicateCount, len_xl ,"count");
                console.log('inserted_array>>>>>'+JSON.stringify(inserted_array));
                db.user.save(inserted_array, function (err, result) {
                  if (err) {
                    return err;
                  } else {
                    fs.unlink(pp, function (err, result) {
                      if (err) {
                        return err;
                      } else {
                        console.log(Object.keys(inserted_json).length+"file deleted successfully!!!"+inserted_array.length)
                        /*res.json({
                          save: true,
                          message: 'data inserted successful',
                          invalid_row: count_array,
                          valid_row: inserted_array.length
                        });*/
                        //return;
                      }

                    })
                  }
                });

                console.log(id_array.length+"111id_array::::::::::"+JSON.stringify(id_array))
                console.log("11111inserted_array:::::::::"+JSON.stringify(inserted_array));
                if(inserted_array!= undefined){
                  if(inserted_array.length > 0 && id_array.length==0){
                    console.log('1111')
                    res.json({save: true, message: 'data inserted successful', status:"first","duplicates":duplicateArray});
                  }else if(inserted_array.length > 0 && id_array.length > 0){
                    console.log('2222')
                    res.json({save: true, message: 'data inserted successful',status:"second","duplicates":duplicateArray});
                  }else if(inserted_array.length==0 && id_array.length > 0){
                    res.json({save: true, message: 'data inserted successful',status:"third","duplicates":duplicateArray});
                  }else{
                    res.json({save: false, message: 'duplicated data',status:" fourth final else","duplicates":duplicateArray});
                  }
                }else{
                  if(inserted_array== undefined && id_array.length==0){
                    console.log('3333')
                    res.json({save: true, message: 'data inserted successful',status:"fifth","duplicates":duplicateArray});
                  }else if(inserted_array.length==0 && id_array.length==0){
                    console.log('4444')
                    res.json({save: true, message: 'data inserted successful',status:"sixth","duplicates":duplicateArray});
                  }else if(inserted_array.length==0 && id_array== undefined ){
                    console.log('555')
                    res.json({save: true, message: 'data inserted successful',status:"seventh","duplicates":duplicateArray});
                  }else{
                    console.log('666')
                    res.json({save: false, message: 'duplicated data',status:"Eighth final else" ,"duplicates":duplicateArray});
                  }
                }
              }

            }



            /*--------------------------------------------------------------*/







         // }
        }
      })
    }
  });

//  }

  // res.send(req.files);
});

var insertResident = exports.insertResident = function (data) {
  db.user.save(inserted_array, function (error, user_data) {
    if (error) {
      return error;
    }
    else {
      console.log('user data saved successfully!!!');
      // res.status(200).json(user_data);
      /*-----used to delete the file from the folder-----*/
      fs.unlink(pp, function (err, result) {
        if (err) {
          return err;
        } else {
          console.log("file deleted successfully!!!")
          // res.json({save: true,invalid_field:count_array})
        }

      })

    }
  })
}

function fetchResident() {
  db.user.find({flat_id: {$ne: ""}}).toArray(function (error, find_resident) {
    if (error) {
      console.log('error:::::' + error)
    } else {
      console.log('find_resident::::' + JSON.stringify(find_resident))
    }
  });
}

module.exports = router;
