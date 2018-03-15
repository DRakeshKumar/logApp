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
var trimmedArray = [];
var values = [];

var status = "Active"
var count_array = [];
var pp;
var prop_id;
var no = 1;
var serviceTypeList = [];
var level1List = [];
var level2List = [];
var level3List = [];
var level4List = [];
var level4List = [];
var dailyListOne=[];
var dailyListTwo=[];
var dailyListThree=[];
var dailyListFour=[];
var rac_my_home_list_one=[];
var rac_my_home_list_two=[];
var rac_my_home_list_three=[];
var rac_my_home_list_four=[];
var rac_common_area_list_one=[];
var rac_common_area_list_two=[];
var rac_common_area_list_three=[];
var rac_common_area_list_four=[];
var emergencyOne=[];
var emergencyTwo=[];
var emergencyThree=[];
var emergencyFour=[];
var directoryOne=[];
var directoryTwo=[];
var directoryThree=[];
var directoryFour=[];
// Connect

function removeDuplicates(originalArray, objKey) {
  var value;
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

router.post("/uploadExcelProcessForRequestSLA",upload.array("uploads[]", 12), function (req, res) {
  pp = './uploads/' + t_name;
  var temp_array = [];
  var work_book = XLSX.readFile(pp);
  var sheet_name_list = work_book.SheetNames;
  var xl_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name_list[0]]);
  var xl_data_header = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name_list[0]], {header: 1});
  console.log(xl_data_header[0].length + 'xl_data_header::::' + JSON.stringify(xl_data_header[0]))
 // console.log('--------------->>>>>'+JSON.stringify(xl_data))

 /* var groupedServicesTypeList = _.groupBy(xl_data, function (item) { return item['Services Type']});
  var filter_data_daily_services=_.filter(xl_data, {'Services Type':  'Daily Services'});
  var daily_data= _.groupBy(filter_data_daily_services, function (item) { return item['Services Type']});
  var filter_data_raise_complaint_my_home=_.filter(xl_data, {'Services Type':  'Raise a complaint - My home'});
  var rac_my_home_data= _.groupBy(filter_data_raise_complaint_my_home, function (item) { return item['Services Type']});
  var filter_data_raise_complaint_common_area=_.filter(xl_data, {'Services Type':  'Raise a complaint - Common Area'});
  var rac_common_area_data= _.groupBy(filter_data_raise_complaint_common_area, function (item) { return item['Services Type']});
  var filter_data_emergency=_.filter(xl_data, {'Services Type':  'Emergency'});
  var emergency_data= _.groupBy(filter_data_emergency, function (item) { return item['Services Type']});
  var filter_data_directory=_.filter(xl_data, {'Services Type':  'Directory'});
  var directory_data= _.groupBy(filter_data_directory, function (item) { return item['Services Type']});*/
  /*----------------------------------------------------------------------*/
  var count = 1;
  var arrayOfObjAfter = _.map(
    _.uniq(
      _.map(xl_data, function(obj){
        return JSON.stringify(obj);
      })
    ), function(obj) {
      return JSON.parse(obj);
    }
  );
  var indexCount = 1;
  var newTicketId
  console.log('arrayOfObjAfter============>>>>>>>' + JSON.stringify(arrayOfObjAfter))
  db.property.findOne({"user_id":req.session.user},function (err, data) {
    if(err){
      return err;
    }else{
      db.services.find().sort({ created_on : -1 }).limit(1).toArray(function (err, find_last_data) {
        if(err){
          return err;
        }else{
          if (find_last_data.length != 0) {
            var d = find_last_data[0].request_id;
            console.log('d>>>>'+d)
            var dSplit = _.replace(d,"RT","");
            console.log('dSplit>>>>'+dSplit)
             newTicketId =  "RT" + (parseInt(dSplit) + parseInt(indexCount));
            indexCount++;
            console.log('newTicketId>>>>'+newTicketId)
            //  inserted_array["request_number"] = newTicketId;
          }
          console.log('inside else:::::::::::::'+JSON.stringify(find_last_data));
          if(_.includes(JSON.stringify(xl_data_header[0]), 'Flat Id')){
            console.log('1111111111111')
            res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
            return;
          }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Flat')){
            console.log('22222222222')
            res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
            return;
          }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Is Manager (only one can be the manager)')) {
            console.log('33333333333333')
            res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
            return;
          }else{
            for (var key in arrayOfObjAfter) {
              if (arrayOfObjAfter.hasOwnProperty(key)) {
                // console.log("just checking",arrayOfObjAfter)
                inserted_json = {};
                if(arrayOfObjAfter[key]['id']){
                  var query_data={
                    service_type             : arrayOfObjAfter[key]['Services Type']== undefined ? "" :  arrayOfObjAfter[key]['Services Type'],
                    level_1                  : arrayOfObjAfter[key]['Level 1']== undefined ? "" :  arrayOfObjAfter[key]['Level 1'],
                    level_2                  : arrayOfObjAfter[key]['Level 2']== undefined ? "" :  arrayOfObjAfter[key]['Level 2'],
                    level_3                  : arrayOfObjAfter[key]['Level 3']== undefined ? "" :  arrayOfObjAfter[key]['Level 3'],
                    level_4                  : arrayOfObjAfter[key]['Level 4']== undefined ? "" :  arrayOfObjAfter[key]['Level 4'],
                    sla_time                 : arrayOfObjAfter[key]['Completion SLA (in hours)']== undefined ? "" :  arrayOfObjAfter[key]['Completion SLA (in hours)'] ,
                    active                   : arrayOfObjAfter[key]['Active']== undefined ? "" :   arrayOfObjAfter[key]['Active']
                  }

                  db.services.update({_id:ObjectID(arrayOfObjAfter[key]['id'])},{$set: query_data},function (err,data) {
                    if (err){
                      return err;
                    }else{
                      console.log('inside if::::::::::'+JSON.stringify(data))
                      fs.unlink(pp, function (err, result) {
                        if (err) {
                          return err;
                        } else {
                          console.log("file deleted successfully!!!")
                          res.json({
                            save: true,
                            message: 'data Updated successfully'
                          })
                        }

                      })
                    }

                    //inserted_array.push(inserted_json)
                  });
                } else {
                  if(_.includes(JSON.stringify(xl_data_header[0]), 'Flat Id')){
                    console.log('1111111111111')
                    res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
                    return;
                  }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Flat')){
                    console.log('22222222222')
                    res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
                    return;
                  }else if(_.includes(JSON.stringify(xl_data_header[0]), 'Is Manager (only one can be the manager)')) {
                    console.log('33333333333333')
                    res.json({save: false, message: 'upload failed.Invalid Excel Sheet'})
                    return;
                  }else{
                    console.log('next step::::::::::::::::');
                    var inserted_array=[];
                    var inserted_json = {
                      // id: temp_array[key]['ID'] == undefined ? "" : temp_array[key]['ID'],
                      property_id             :  data.property_id,
                      request_id              :  data.property_id + '-'+ "RT"+count++,
                      user_id                 :   req.session.user,
                      service_type            :   arrayOfObjAfter[key]['Services Type'] == undefined ? "" : arrayOfObjAfter[key]['Services Type'],
                      level_1                 :   arrayOfObjAfter[key]['Level 1'] == undefined ? "" : arrayOfObjAfter[key]['Level 1'],
                      level_2                 :   arrayOfObjAfter[key]['Level 2'] == undefined ? "" : arrayOfObjAfter[key]['Level 2'],
                      level_3                 :   arrayOfObjAfter[key]['Level 3'] == undefined ? "" : arrayOfObjAfter[key]['Level 3'],
                      level_4                 :   arrayOfObjAfter[key]['Level 4'] == undefined ? "" : arrayOfObjAfter[key]['Level 4'],
                      sla_time                :   arrayOfObjAfter[key]['Completion SLA (in hours)'] == undefined ? "" : arrayOfObjAfter[key]['Completion SLA (in hours)'],
                      active                  :   arrayOfObjAfter[key]['Active'] == undefined ? "" : arrayOfObjAfter[key]['Active']
                    }
                    inserted_array.push(inserted_json)
                    db.services.save(inserted_array, function (err, result) {
                      if (err) {
                        return err;
                      } else {
                        fs.unlink(pp, function (err, result) {
                          if (err) {
                            return err;
                          } else {
                            console.log("file deleted successfully!!!")
                            res.json({
                              save: true,
                              message: 'data inserted successful',
                              invalid_row: count_array,
                              valid_row: inserted_array.length
                            })
                          }

                        })
                      }
                    });

                    //   }
                    // });
                  }


                }
                //console.log("response", inserted_json);


              }
            }
          }

        }
      });
    }
  });








 /* db.services.find({service_id : "SR-1"}).toArray(function (err, service_data) {
    if(err){
      return err;
    }else {
      if (xl_data_header[0].length > 8 || xl_data_header[0].length < 8) {
        return res.json({save: false, message: 'Your Excel sheet does not have exact number of headers'})
      }

      /!*----------------------------------------------------------------*!/
      if (xl_data[0]['Request Ids'] == undefined || xl_data[0]['Request Ids'] == null) {
        console.log('request id has no data:::::undefined');
        /!*------------------------------------------------------------------*!/
        for(var t in daily_data) {
           var service_type_id = new ObjectID();
           var dailyListOneJson={
             type: t, _id: service_type_id
           }
           dailyListOne.push(dailyListOneJson);
           var groupedOneList = _.groupBy(daily_data[t], function (item) {
             return item['Level 1']
           });
           for (var l in groupedOneList) {
             var level1_id = new ObjectID();
             var ds_l1_id_integrated=service_data[0].service_id+'_'+'DS-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
             var dailyListTwoJson={
               level:"1",request_id:'RT-DS'+count++,service_type: t,service_type_id:service_type_id,service_name: groupedOneList[l][0]['Level 1'], _id: level1_id, level_id:ds_l1_id_integrated
             }
             dailyListTwo.push(dailyListTwoJson)
             var groupedTwoList = _.groupBy(groupedOneList[l], function (item) {
               return item['Level 2']
             });
             for (var m in groupedTwoList) {
               var level2_id = new ObjectID();
               var ds_l2_id_integrated=service_data[0].service_id+'_'+'DS-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
               var dailyListThreeJson={
                 level:"2",service_type: t,service_type_id:service_type_id, service_name: groupedTwoList[m][0]['Level 2'], _id: level2_id,level_id:ds_l2_id_integrated, parent_id:ds_l1_id_integrated
               }
               dailyListThree.push(dailyListThreeJson)
               var groupedThreeList = _.groupBy(groupedTwoList[m], function (item) {
                 return item['Level 3']
               });
               for (var n in groupedThreeList) {
                 var level3_id = new ObjectID();
                 var ds_l3_id_integrated=service_data[0].service_id+'_'+'DS-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                 var dailyListFourJson={
                   level:"3",service_type: t,service_type_id:service_type_id, service_name: groupedThreeList[n][0]['Level 3'], _id: level3_id,level_id:ds_l3_id_integrated, parent_id:ds_l2_id_integrated
                 }
                 dailyListFour.push(dailyListFourJson)
               }
             }
           }
         }
         var final_array_daily_service=_.concat(dailyListTwo,dailyListThree,dailyListFour)

         /!*----------------------------------------------------------------------*!/
         for(var ds in rac_my_home_data) {
           var h_service_type_id = new ObjectID();
           rac_my_home_list_one.push({type: ds, _id: h_service_type_id});
           var groupedOneList = _.groupBy(rac_my_home_data[ds], function (item) {
             return item['Level 1']
           });
           for (var l1 in groupedOneList) {
             var level1_id = new ObjectID();
             var rac_my_home_l1_id_integrated=service_data[0].service_id+'_'+'RAC-MH-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
             rac_my_home_list_two.push({level:"1",request_id:'RT-RAC-MH'+count++,service_type:ds,service_type_id:h_service_type_id,service_name: groupedOneList[l1][0]['Level 1'], _id: level1_id,level_id:rac_my_home_l1_id_integrated })
             var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
               return item['Level 2']
             });
             for (var l2 in groupedTwoList) {
               var level2_id = new ObjectID();
               var rac_my_home_l2_id_integrated=service_data[0].service_id+'_'+'RAC-MH-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
               rac_my_home_list_three.push({
                 level:"2",
                 service_type:ds,
                 service_type_id:h_service_type_id,
                 service_name: groupedTwoList[l2][0]['Level 2'],
                 level_id: rac_my_home_l2_id_integrated,
                 _id: level2_id,
                 parent_id:rac_my_home_l1_id_integrated

               })
               var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                 return item['Level 3']
               });
               for (var l3 in groupedThreeList) {
                 var level3_id = new ObjectID();
                 var rac_my_home_l3_id_integrated=service_data[0].service_id+'_'+'RAC-MH-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                 rac_my_home_list_four.push({
                   level:"3",
                   service_type:ds,
                   service_type_id:h_service_type_id,
                   service_name: groupedThreeList[l3][0]['Level 3'],
                   _id: level3_id,
                   level_id:rac_my_home_l3_id_integrated,
                   parent_id:rac_my_home_l2_id_integrated

                 })
               }
             }
           }
         }
         var final_array_rac_my_home=_.concat(rac_my_home_list_two,rac_my_home_list_three,rac_my_home_list_four)

         /!*----------------------------------------------------------------------*!/
         for(var ds in rac_common_area_data) {
           var c_service_type_id = new ObjectID();
           rac_common_area_list_one.push({type: ds, _id: c_service_type_id});
           var groupedOneList = _.groupBy(rac_common_area_data[ds], function (item) {
             return item['Level 1']
           });
           for (var l1 in groupedOneList) {
             var level1_id = new ObjectID();
             var rac_c_area_l1_id_integrated=service_data[0].service_id+'_'+'RAC-CA-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
             rac_common_area_list_two.push({level:"1",request_id:'RT-RAC-CA'+count++,service_type: ds,service_type_id:c_service_type_id,service_name: groupedOneList[l1][0]['Level 1'],_id: level1_id,level_id:rac_c_area_l1_id_integrated})
             var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
               return item['Level 2']
             });
             for (var l2 in groupedTwoList) {
               var level2_id = new ObjectID();
               var rac_c_area_l2_id_integrated=service_data[0].service_id+'_'+'RAC-CA-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
               rac_common_area_list_three.push({
                 level:"2",
                 service_type: ds,
                 service_type_id:c_service_type_id,
                 service_name: groupedTwoList[l2][0]['Level 2'],
                 _id: level2_id,
                 level_id:rac_c_area_l2_id_integrated,
                 parent_id:rac_c_area_l1_id_integrated

               })
               var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                 return item['Level 3']
               });
               for (var l3 in groupedThreeList) {
                 var level3_id = new ObjectID();
                 var rac_c_area_l3_id_integrated=service_data[0].service_id+'_'+'RAC-CA-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                 rac_common_area_list_four.push({
                   level:"3",
                   service_type: ds,
                   service_type_id:c_service_type_id,
                   service_name: groupedThreeList[l3][0]['Level 3'],
                   _id: level3_id,
                   level_id:rac_c_area_l3_id_integrated,
                   parent_id:rac_c_area_l2_id_integrated

                 })
               }
             }
           }
         }
         var final_array_rac_common_area=_.concat(rac_common_area_list_two,rac_common_area_list_three,rac_common_area_list_four)
         var raise_complain={
           raise_a_complaint_my_home_info:final_array_rac_my_home,raise_a_complaint_my_common_area_info:final_array_rac_common_area
         }
         var final_complain_array=[];
         final_complain_array.push(raise_complain)

         /!*-----------------------------------------------------------------------*!/
         for(var ds in emergency_data) {
           var e_service_type_id = new ObjectID();
           emergencyOne.push({type: ds, _id: e_service_type_id});
           var groupedOneList = _.groupBy(emergency_data[ds], function (item) {
             return item['Level 1']
           });
           for (var l1 in groupedOneList) {
             var level1_id = new ObjectID();
             var emergency_l1_id_integrated=service_data[0].service_id+'_'+'EM-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
             emergencyTwo.push({level:"1",request_id:'RT-EM'+count++,service_type:ds,service_type_id:e_service_type_id,service_name: groupedOneList[l1][0]['Level 1'],_id: level1_id,level_id:emergency_l1_id_integrated})
             var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
               return item['Level 2']
             });
             for (var l2 in groupedTwoList) {
               var level2_id = new ObjectID();
               var emergency_l2_id_integrated=service_data[0].service_id+'_'+'EM-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
               emergencyThree.push({
                 level:"2",
                 service_type:ds,
                 service_type_id:e_service_type_id,
                 service_name: groupedTwoList[l2][0]['Level 2'],
                 _id: level2_id,
                 level_id:emergency_l2_id_integrated,
                 parent_id:emergency_l1_id_integrated

               })
               var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                 return item['Level 3']
               });
               for (var l3 in groupedThreeList) {
                 var level3_id = new ObjectID();
                 var emergency_l3_id_integrated=service_data[0].service_id+'_'+'EM-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                 emergencyFour.push({
                   level:"3",
                   service_type:ds,
                   service_type_id:e_service_type_id,
                   service_name: groupedThreeList[l3][0]['Level 3'],
                   _id: level3_id,
                   level_id:emergency_l3_id_integrated,
                   parent_id:emergency_l2_id_integrated

                 })
               }
             }
           }
         }
         var final_array_emergency=_.concat(emergencyTwo,emergencyThree,emergencyFour)

         /!*------------------------------------------------------------------------*!/
         for(var ds in directory_data) {
           var d_service_type_id = new ObjectID();
           directoryOne.push({type: ds, _id: d_service_type_id});
           var groupedOneList = _.groupBy(directory_data[ds], function (item) {
             return item['Level 1']
           });
           for (var l1 in groupedOneList) {
             var level1_id = new ObjectID();
             var directory_l1_id_integrated=service_data[0].service_id+'_'+'DR-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
             directoryTwo.push({level:"1",request_id:'RT-DR'+count++,service_type:ds,service_type_id:d_service_type_id,service_name: groupedOneList[l1][0]['Level 1'], _id: level1_id,level_id:directory_l1_id_integrated })
             var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
               return item['Level 2']
             });
             for (var l2 in groupedTwoList) {
               var level2_id = new ObjectID();
               var directory_l2_id_integrated=service_data[0].service_id+'_'+'DR-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
               directoryThree.push({
                 level:"2",
                 service_type:ds,
                 service_type_id:d_service_type_id,
                 service_name: groupedTwoList[l2][0]['Level 2'],
                 _id: level2_id,
                 level_id:directory_l2_id_integrated,
                 parent_id:directory_l1_id_integrated

               })
               var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                 return item['Level 3']
               });
               for (var l3 in groupedThreeList) {
                 var level3_id = new ObjectID();
                 var directory_l3_id_integrated=service_data[0].service_id+'_'+'DR-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                 directoryFour.push({
                   level:"3",
                   service_type:ds,
                   service_type_id:d_service_type_id,
                   service_name: groupedThreeList[l3][0]['Level 3'],
                   _id: level3_id,
                   level_id:directory_l3_id_integrated,
                   parent_id:directory_l2_id_integrated

                 })
               }
             }
           }
         }
         var final_array_directory=_.concat(directoryTwo,directoryThree,directoryFour)

         /!*------------------------------------------------------------------------*!/
         var query_data={
           daily_service_info:final_array_daily_service,raise_a_complaint:final_complain_array,emergency_info:final_array_emergency,directory_info:final_array_directory
         }

         async.parallel([
           function(callback) {
             db.services.update({service_id : "SR-1"},{$set:query_data}, function (err) {
               if (err) {
                 callback(err);
                 //It's important to return so that `callback` isn't called twice
                 return;
               }
               callback();
             });
           },
         ], function(err) {
           if (err) {
             //Handle the error in some way. Here we simply throw it
             //Other options: pass it on to an outer callback, log it etc.
             throw err;
           }
           // console.log('Both Daily_Service, Emergency and Raise A Complaint  are saved now');
           fs.unlink(pp, function (err, result) {
             if (err) {
               return err;
             } else {
               console.log(pp + ' :' + "file deleted successfully!!!");
               res.json({save: true, message: 'updated successfully!!!'});
             }
           })
         });
       } else if (xl_data[0]['Request Ids']!= undefined)  {
         console.log('-------------request id has  data:::::::: not undefined');
       }
        /!*-----------------------------------------------------------------*!/

        /!*db.services.save(xl_data, function (err, result) {
          if (err) {
            return err;
          } else {
            fs.unlink(pp, function (err, result) {
              if (err) {
                return err;
              } else {
                console.log("file deleted successfully!!!")
                res.json({
                  save: true,
                  message: 'data updated successful',
                  invalid_row: count_array,
                  valid_row: inserted_array.length
                })
              }

            })
          }
        });*!/


      }
    });*/

});

module.exports = router;
