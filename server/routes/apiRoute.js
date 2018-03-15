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
//var mongojs = require('mongojs');
var config = require('../../config/main.json');
var db = mongojs(config.connectionString);
var Q = require('q');
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
var moment=require('moment')
const async=require('async');
// Connect
var cloudinary = require('cloudinary');
var groupArray = require('group-array');
// Import Common Services
var test_request = require("../../config/test_userAPI.js");
var emailService = require('../../services/email.service');
var errors = require('../../services/error');
var validation = require('../../services/validations');
var smsService = require('../../services/sms.service');
var passwordService = require('../../services/password.service.js');
var pushNotificationService =  require('../../services/push.notifications.js');
var rr = require('rr')
/*----------------------------------------------------------------------*/

/*-------------------------------------------------------------*/
var response={};
// Constant veriable declearations
var apiFunctions = [];
var User_ImageUrl=(config.cloudinary_set=='Y')?config.cloudinary_url:config.image_url;
cloudinary.config({ cloud_name: config.cloudinary_cloud_name,  api_key: config.cloudinary_api_key, api_secret: config.cloudinary_api_secret });

/**********************************   Image Upload functionality ********************************************************************/

var storage = multer.diskStorage({
  destination: function (req, file, callback)
  {
    var path='./app/images/user_profile';
    if(file.fieldname=='profile_photo')
      path='./app/images/user_profile';


    callback(null,path);
  },
  filename: function (req, file, callback) {
    var ext = '';
    if(file.originalname)
    {
      var extesion_array = file.originalname.split('.');
      ext = extesion_array[extesion_array.length - 1];
    }
    var image_name=file.fieldname+'-' + Date.now() + "-" + extesion_array[0] + "." +ext;

    if(req.body.profile_picture)
    {
      image_name = req.body.profile_picture;
    }
    callback(null, image_name);
  }
});
var upload = multer({ storage : storage});

/************************************   End of upload functionality  ******************************************************************/


// if using Get Requests
router.get('/', function (req, res, next) {
  switchRequest(test_request,res).then(function(data){
    res.end(JSON.stringify(data));
  });

});

// if using Post Requests
router.post('/', upload.fields([{name: 'profile_photo', maxCount: 1}]), function (req, res, next) {
  var profile_picture = req.files;

  // if we have file in request
  if(profile_picture)
  {
    userAuthentication(req.headers,res).then(function(data){
      if(data.response_status == "failure")
      {
        res.end(JSON.stringify(data));
      }
      else
      {
        apiFunctions[req.body.service_name](req.body,data,profile_picture).then(function(api_response){
          res.end(JSON.stringify(api_response));
        });
      }
    });
  }
  else
  {
    switchRequest(req.body,req.headers,res).then(function(data){
      res.end(JSON.stringify(data));
    });
  }

});

/*******************  Function to Authenticate user **********************************/
function userAuthentication(api_request,res)
{

  var deferred = Q.defer();
  if(validation.check(api_request.user_id,'required') == 0 )
  {
    deferred.resolve( errors.senderror(422,"User ID"));
    return deferred.promise;
  }
  if (!api_request.request_from || api_request.request_from != "web" )
  {
    if(validation.check(api_request.access_token,'required') == 0 )
    {
      deferred.resolve( errors.senderror(422,"Access token"));
      return deferred.promise;
    }
  }

 db.user.findOne({_id:ObjectID(api_request.user_id)}, function (err, user)
  {
//console.log(JSON.stringify(api_request))
    if(err){
      console.log('--------------->0');
      deferred.resolve(errors.senderror(416));
    }

    else if(!user) {
      console.log('--------------->1');
      deferred.resolve(errors.senderror(401));
    }
    else if(api_request.access_token != user.access_token){
      console.log(user);
      deferred.resolve(errors.senderror(401));
      console.log('--------------->2');
    }

    else{
      console.log('--------------->3');
      deferred.resolve(user);
    }
  })
  return deferred.promise;
}
/********** Function to switch between function depending on service name **************/
function switchRequest(api_request,headers,res)
{
  var api_response = null;
  var deferred = Q.defer();
  if(api_request.service_name == "")
    api_request.service_name = "noServiceFound";
  if(apiFunctions[api_request.service_name] == undefined)
  {
    deferred.resolve(errors.senderror(404,"Service"));
    return deferred.promise;
  }
  userAuthentication(headers,res).then(function(data){
    if(data.response_status == "failure")
    {
      deferred.resolve(data);
    }
    else
    {
      apiFunctions[api_request.service_name](api_request,data).then(function(api_response){
        deferred.resolve(api_response);
      });
    }
  });
  return deferred.promise;
}



/********** default function if service not found **************/
apiFunctions['noServiceFound'] = function ()
{
  return returnFailure("Service not found.");
}

/********** function to return failure **************/
function returnFailure(message)
{
  return {"status":"error","data":{"message":message}};
}
/*************** Function to download images **********/

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

/**********************************************************************/

/**********************************************************************/



apiFunctions['image_paths'] =  function (api_request)
{
  var deferred = Q.defer();
  var image_url = (config.cloudinary_set=='Y')?config.cloudinary_url:config.image_url;
  var data =  {
    "response_status":"success",
    "image_paths":{
      "user_profile_photo":image_url+"/"+config.user_profile_photo+"/"
    }
  }
  deferred.resolve(data);
  return deferred.promise;
}

var service_type_array = [];
var idList = [];
var phaseList = [];
var towerList = [];
var flatList = [];
var flat1List = [];
var finalList = [];

var element_json_user;

var properties_json={};

/*************** Web-service for the resident-sync **********/

apiFunctions['resident_sync'] = function (api_request, user_details) {
  var deferred = Q.defer();
  console.log('------' + JSON.stringify(api_request.service_type))
  console.log('------' + JSON.stringify(api_request))
  var query = api_request.service_type;
  var property_id = api_request.property_id;
  var id = user_details._id;
  console.log('user_details>>>>>>>>'+JSON.stringify(user_details))
  console.log('id>>>>>>>>'+id)
  var service_type;

  db.user.find({_id: ObjectID(id)}).toArray(function (err, resident_details) {
    if (err) {
      deferred.resolve(errors.senderror(416));
      return deferred.promise;
    } else {
          var element_array_user = [];
          var properties_array=[];
          resident_details.forEach(
            function (element) {
              element_json_user = {
                _id: element._id,
                first_name: element.first_name,
                last_name: element.last_name,
                email_id: element.email_id,
                phone_number: element.phone_number,
                user_type: element.user_type,
                flat_id:element.flat_id,
                created_on: element.created_on
              }
              element_array_user.push(element_json_user)
            });

          // console.log(element_json_user)
         // console.log( element_array_user)
          var property_flat_id = _.split(element_json_user.flat_id);
          var property = _.split(element_array_user[0].flat_id, ",");
          var propertyArr = _.map(property ,function (a){
            return _.split(a, "_")[0];
          });
          var propertyArr1 = _.map(property ,function (a){
            return  a
          });
          console.log(new Date().toString(), "before request");
        //  console.log('element_array_user::::' ,propertyArr);
       //   console.log('property_flat_id::::' ,property_flat_id);
        //  console.log('propertyArr1::::' ,propertyArr1);
          for(var i =0; i < propertyArr.length; i++){
            db.property.find({property_id: propertyArr[i]},function (err, find_property_data) {
              if (err) {
                deferred.resolve(errors.senderror(416));
                return deferred.promise;
              } else {
                 // console.log('find_property_data----------->>>'+JSON.stringify(find_property_data[0].flat));

                find_property_data.forEach(
                  function (element) {
                    for(var l =0; l < propertyArr1.length; l++){
                      // console.log('........'+JSON.stringify(propertyArr1[l]))
                      for(var j =0; j < find_property_data[0].flat.length; j++){
                        // console.log('^^^^^^^^^^'+JSON.stringify(find_property_data[0].flat[j].flat_id))
                        if(propertyArr1[l]===find_property_data[0].flat[j].flat_id){
                          properties_json = {
                            property_name: find_property_data[0].property_name,
                            property_id: find_property_data[0].property_id,
                            phase_name: find_property_data[0].flat[j].phase_name,
                            tower_name: find_property_data[0].flat[j].tower_name,
                            flat_id:find_property_data[0].flat[j].flat_id,
                            flat_name:find_property_data[0].flat[j].flat_no
                          }
                        }
                      }
                    }
                    properties_array.push(properties_json)
                  });
              }
            })
            console.log(new Date().toString(), "after request " , i);
          }


      console.log('============>>>>>>>>>>>>>cool'+JSON.stringify(properties_array))
          var propertyServices = {};

          var property_service_array=[];
          var dailyListOneJson={};
          var dailyListTwoJson={};
          var dailyListThreeJson={};
          var dailyListFourJson={};
          var dailyListFiveJson={};

      var forEach = require('async-foreach').forEach;
      forEach(propertyArr1, function(item, index, arr) {
        console.log("each", item, index, arr);
        db.services.find({'property_id': item.split("_")[0]}, function (err, find_services_data) {
          if (err) {
            deferred.resolve(errors.senderror(416));
            return deferred.promise;
          } else {
            if(api_request.service_type==1){
              db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:"Emergency"} ],status:"Completed"}).toArray(function(err,stop_service__details) {
                if (err) {
                  deferred.resolve(errors.senderror(416));
                  return deferred.promise;
                } else {
                  var emergency_stop_array_data=[];
                  var emergency_stop_json_data;
                  stop_service__details.forEach(function (e) {
                    emergency_stop_json_data={
                      property_id:e.property_id,
                      flat_id:e.flat_id,
                      service_type:e.service_type,
                      level_1:e.level_1,
                      level_2:e.level_2,
                      level_3:e.level_3,
                      level_4:e.level_4
                    }
                    emergency_stop_array_data.push(emergency_stop_json_data);
                  })
                  var filter_data_emergency=_.filter(find_services_data, {'service_type':  'Emergency'});
                  var emergency_data= _.groupBy(filter_data_emergency, function (item) { return item['service_type']});
                  var emergencyOne=[];
                  var emergencyTwo=[];
                  var emergencyThree=[];
                  var emergencyFour=[];
                  var emergencyFive=[];
                  for(var ds in emergency_data) {
                    var e_service_type_id = new ObjectID();
                    var emergency__l0_id_integrated=find_services_data[0].property_id+'_'+'EM'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                    emergencyOne.push({type: ds, _id: e_service_type_id, level_id:emergency__l0_id_integrated});
                    var groupedOneList = _.groupBy(emergency_data[ds], function (item) {
                      return item['level_1']
                    });
                    for (var l1 in groupedOneList) {
                      var level1_id = new ObjectID();
                      var emergency_l1_id_integrated=find_services_data[0].property_id+'_'+'EM-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                      emergencyTwo.push({level:"1",name: l1,_id: level1_id,level_id:emergency_l1_id_integrated,parent_id:emergency__l0_id_integrated})
                      var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                        return item['level_2']
                      });
                      for (var l2 in groupedTwoList) {
                        var level2_id = new ObjectID();
                        var emergency_l2_id_integrated=find_services_data[0].property_id+'_'+'EM-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        emergencyThree.push({
                          level:"2",
                          name: l2,
                          _id: level2_id,
                          level_id:emergency_l2_id_integrated,
                          parent_id:emergency_l1_id_integrated

                        })
                        var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                          return item['level_3']
                        });
                        for (var l3 in groupedThreeList) {
                          var level3_id = new ObjectID();
                          var emergency_l3_id_integrated=find_services_data[0].property_id+'_'+'EM-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          emergencyFour.push({
                            level:"3",
                            name: l3,
                            _id: level3_id,
                            level_id:emergency_l3_id_integrated,
                            parent_id:emergency_l2_id_integrated

                          })
                          var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                            return item['level_4']
                          });
                          for (var l4 in groupedThreeList) {
                            var level4_id = new ObjectID();
                            var emergency_l4_id_integrated=find_services_data[0].property_id+'_'+'EM-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            emergencyFive.push({
                              level:"3",
                              name: l4,
                              _id: level4_id,
                              level_id:emergency_l4_id_integrated,
                              parent_id:emergency_l3_id_integrated
                            })
                          }
                        }
                      }
                    }
                  }
                  var emergency_array={
                    level_1:emergencyTwo,
                    level_2:emergencyThree,
                    level_3:emergencyFour,
                    level_4:emergencyFive
                  }
                  property_service_array.push(emergency_array)
                  propertyServices[b] =_.cloneDeep(emergency_array);
                  console.log('=========>'+JSON.stringify(propertyServices));
                  setTimeout(function(){
                    response = {response_status: "success", user_details: element_json_user,properties:properties_array,service_info:propertyServices,stop_service_info:emergency_stop_array_data};
                    deferred.resolve(response);
                  }, 5000);
                }
              });

            }
            else if(api_request.service_type==2){

              db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:"Directory"} ],status:"Completed"}).toArray(function(err,stop_service__details) {
                if (err) {
                  deferred.resolve(errors.senderror(416));
                  return deferred.promise;
                } else {
                  var directory_stop_array_data=[];
                  var directory_stop_json_data;
                  stop_service__details.forEach(function (e) {
                    directory_stop_json_data={
                      property_id:e.property_id,
                      flat_id:e.flat_id,
                      service_type:e.service_type,
                      level_1:e.level_1,
                      level_2:e.level_2,
                      level_3:e.level_3,
                      level_4:e.level_4
                    }
                    directory_stop_array_data.push(directory_stop_json_data);
                  })
                  var filter_data_directory=_.filter(find_services_data, {'service_type':  'Directory'});
                  var directory_data= _.groupBy(filter_data_directory, function (item) { return item['service_type']});
                  var directoryOne=[];
                  var directoryTwo=[];
                  var directoryThree=[];
                  var directoryFour=[];
                  var directoryFive=[];
                  for(var ds in directory_data) {
                    var d_service_type_id = new ObjectID();
                    var directory__l0_id_integrated=find_services_data[0].property_id+'_'+'DR'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                    directoryOne.push({type: ds, _id: d_service_type_id,c_id:directory__l0_id_integrated});
                    var groupedOneList = _.groupBy(directory_data[ds], function (item) {
                      return item['level_1']
                    });
                    for (var l1 in groupedOneList) {
                      var level1_id = new ObjectID();
                      var directory_l1_id_integrated=find_services_data[0].property_id+'_'+'DR-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                      directoryTwo.push({level:"1",name: l1, _id: level1_id,level_id:directory_l1_id_integrated,parent_id:directory__l0_id_integrated })
                      var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                        return item['level_2']
                      });
                      for (var l2 in groupedTwoList) {
                        var level2_id = new ObjectID();
                        var directory_l2_id_integrated=find_services_data[0].property_id+'_'+'DR-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        directoryThree.push({
                          level:"2",
                          name: l2,
                          _id: level2_id,
                          level_id:directory_l2_id_integrated,
                          parent_id:directory_l1_id_integrated

                        })
                        var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                          return item['level_3']
                        });
                        for (var l3 in groupedThreeList) {
                          var level3_id = new ObjectID();
                          var directory_l3_id_integrated=find_services_data[0].property_id+'_'+'DR-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          directoryFour.push({
                            level:"3",
                            name: l3,
                            _id: level3_id,
                            level_id:directory_l3_id_integrated,
                            parent_id:directory_l2_id_integrated

                          })
                          var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                            return item['level_4']
                          });
                          for (var l4 in groupedThreeList) {
                            var level4_id = new ObjectID();
                            var directory_l4_id_integrated=find_services_data[0].property_id+'_'+'DR-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            directoryFive.push({
                              level:"4",
                              name: l4,
                              _id: level4_id,
                              level_id:directory_l4_id_integrated,
                              parent_id:directory_l3_id_integrated

                            })
                          }
                        }
                      }
                    }
                  }
                  var directory_array={
                    level_1:directoryTwo,
                    level_2:directoryThree,
                    level_3:directoryFour,
                    level_4:directoryFive
                  }
                  property_service_array.push(directory_array)
                  propertyServices[b] =_.cloneDeep(directory_array);
                  console.log('=========>'+JSON.stringify(propertyServices));
                  setTimeout(function(){
                    response = {response_status: "success", user_details: element_json_user,properties:properties_array,service_info:propertyServices,stop_service_info:directory_stop_array_data};
                    deferred.resolve(response);
                  }, 5000);
                }
              });



            }
            else if(api_request.service_type==3){

              console.log('entered in 3')
              db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:api_request.service_type} ],status:"Completed"}).toArray(function(err,stop_service__details) {
                if(err){
                  deferred.resolve(errors.senderror(416));
                  return deferred.promise;
                }else{
                  console.log('stop_service__details::::'+JSON.stringify(stop_service__details))
                  var ds_stop_array_data=[];
                  var ds_stop_json_data;
                  stop_service__details.forEach(function (e) {
                    ds_stop_json_data={
                      property_id:e.property_id,
                      property_name:e.property_name,
                      phase_name:e.phase_name ? "" : e.phase_name,
                      tower_name:e.tower_name ? "" : e.tower_name,
                      flat_id:e.flat_id,
                      flat_name:e.flat_name,
                      service_type:e.service_type,
                      level_1:e.level_1,
                      level_2:e.level_2,
                      level_3:e.level_3,
                      level_4:e.level_4
                    }
                    ds_stop_array_data.push(ds_stop_json_data);
                  })
                  //console.log('stopServiceArray>>'+JSON.stringify(stopServiceArray));
                  var filter_data_daily_services=_.filter(find_services_data, {'service_type':  'Daily Services'});
                  var daily_data= _.groupBy(filter_data_daily_services, function (item) { return item.service_type});
                  // console.log('filter_data_daily_services:::::'+JSON.stringify(filter_data_daily_services));
                  // console.log('daily_data:::::'+JSON.stringify(daily_data));
                  var dailyListOne=[];
                  var dailyListTwo=[];
                  var dailyListThree=[];
                  var dailyListFour=[];
                  var dailyListFive=[];
                  for(var t in daily_data) {
                    var service_type_id = new ObjectID();
                    var ds_l0_id_integrated=find_services_data[0].property_id+'_'+'DS-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                    dailyListOneJson={
                      type: t, _id: service_type_id, level_id:ds_l0_id_integrated
                    }

                    dailyListOne.push(dailyListOneJson);
                    //console.log('=*********'+JSON.stringify(dailyListOneJson))


                    var groupedOneList = _.groupBy(daily_data[t], function (item) {
                      return item['level_1']
                    });
                    for (var l in groupedOneList) {
                      var level1_id = new ObjectID();
                      var ds_l1_id_integrated=find_services_data[0].property_id+'_'+'DS-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                      dailyListTwoJson={
                        level:"1",service_name:l, _id: level1_id,level_id:ds_l1_id_integrated, parent_id:ds_l0_id_integrated
                      }

                      dailyListTwo.push(dailyListTwoJson)
                      var groupedTwoList = _.groupBy(groupedOneList[l], function (item) {
                        return item['level_2']
                      });
                      for (var m in groupedTwoList) {
                        var level2_id = new ObjectID();
                        var ds_l2_id_integrated=find_services_data[0].property_id+'_'+'DS-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        dailyListThreeJson={
                          level:"2",service_name: m, _id: level2_id,level_id:ds_l2_id_integrated, parent_id:ds_l1_id_integrated
                        }

                        dailyListThree.push(dailyListThreeJson)
                        var groupedThreeList = _.groupBy(groupedTwoList[m], function (item) {
                          return item['level_3']
                        });
                        for (var n in groupedThreeList) {
                          var level3_id = new ObjectID();
                          var ds_l3_id_integrated=find_services_data[0].property_id+'_'+'DS-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          dailyListFourJson={
                            level:"3", service_name: n, _id: level3_id,level_id:ds_l3_id_integrated, parent_id:ds_l2_id_integrated
                          }

                          dailyListFour.push(dailyListFourJson)
                          var groupedFourList = _.groupBy(groupedThreeList[n], function (item) {
                            return item['level_4']
                          });
                          for (var o in groupedFourList) {
                            var level4_id = new ObjectID();
                            var ds_l4_id_integrated=find_services_data[0].property_id+'_'+'DS-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            var dailyListFiveJson={
                              level:"4",service_name: o, _id: level4_id,level_id:ds_l4_id_integrated, parent_id:ds_l3_id_integrated
                            }

                            dailyListFive.push(dailyListFiveJson)
                          }
                        }
                      }
                    }
                  }
                  //  propertyServices[b] = [];
                  var main_ds_array={
                    level_1:dailyListTwo,
                    level_2:dailyListThree,
                    level_3:dailyListFour,
                    level_4:dailyListFive
                  }
                  //console.log('main_ds_array=========>'+JSON.stringify(main_ds_array));

                  property_service_array.push(main_ds_array)
                  //  propertyServices[b].push(main_ds_array);
                  propertyServices[item] =_.cloneDeep(main_ds_array);
                  setTimeout(function(){
                    response = {response_status: "success",user_details: element_json_user,properties:properties_array,service_info:propertyServices,stop_service_info:ds_stop_array_data};
                    deferred.resolve(response);
                  }, 2000);
                  //  propertyServices = {};
                }
              });



            }
            else if(api_request.service_type==4){
              console.log('entered in 4');
              //  db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:"Daily Services"} ],$or: [ { status:  "Assigned" } , { status:"Accepted"} ]}).toArray(function(err,stop_service__details) {
              db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) }] ,$or: [ { service_type:  "Raise a complaint - My home" } , { service_type:"Raise a complaint - Common Area"} ] ,status:"Completed"}).toArray(function(err,stop_service__details) {
                if (err) {
                  deferred.resolve(errors.senderror(416));
                  return deferred.promise;
                } else {
                  var rac_stop_array_data=[];
                  var rac_stop_json_data;
                  stop_service__details.forEach(function (e) {
                    rac_stop_json_data={
                      property_id:e.property_id,
                      flat_id:e.flat_id,
                      service_type:e.service_type,
                      level_1:e.level_1,
                      level_2:e.level_2,
                      level_3:e.level_3,
                      level_4:e.level_4
                    }
                    rac_stop_array_data.push(rac_stop_json_data);
                  })
                  var filter_data_raise_complaint_my_home=_.filter(find_services_data, {'service_type':  'Raise a complaint - My home'});
                  var rac_my_home_data= _.groupBy(filter_data_raise_complaint_my_home, function (item) { return item['service_type']});
                  var rac_my_home_list_one=[];
                  var rac_my_home_list_two=[];
                  var rac_my_home_list_three=[];
                  var rac_my_home_list_four=[];
                  var rac_my_home_list_five=[];
                  for(var ds in rac_my_home_data) {
                    var h_service_type_id = new ObjectID();
                    var rac_l0_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                    rac_my_home_list_one.push({type: ds, _id: h_service_type_id,level_id:rac_l0_id_integrated});
                    var groupedOneList = _.groupBy(rac_my_home_data[ds], function (item) {
                      return item['level_1']
                    });
                    for (var l1 in groupedOneList) {
                      var level1_id = new ObjectID();
                      var rac_my_home_l1_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                      rac_my_home_list_two.push({level:"1",name: l1, _id: level1_id,level_id:rac_my_home_l1_id_integrated ,parent_id:rac_l0_id_integrated})
                      var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                        return item['level_2']
                      });
                      for (var l2 in groupedTwoList) {
                        var level2_id = new ObjectID();
                        var rac_my_home_l2_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        rac_my_home_list_three.push({
                          level:"2",
                          name: l2,
                          level_id: rac_my_home_l2_id_integrated,
                          _id: level2_id,
                          parent_id:rac_my_home_l1_id_integrated

                        })
                        var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                          return item['level_3']
                        });
                        for (var l3 in groupedThreeList) {
                          var level3_id = new ObjectID();
                          var rac_my_home_l3_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          rac_my_home_list_four.push({
                            level:"3",
                            name: l3,
                            _id: level3_id,
                            level_id:rac_my_home_l3_id_integrated,
                            parent_id:rac_my_home_l2_id_integrated

                          })
                          var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                            return item['level_4']
                          });
                          for (var l4 in groupedFourList) {
                            var level4_id = new ObjectID();

                            var rac_my_home_l4_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            rac_my_home_list_five.push({
                              level:"4",
                              name: l4,
                              _id: level4_id,
                              level_id:rac_my_home_l4_id_integrated,
                              parent_id:rac_my_home_l3_id_integrated

                            })
                          }
                        }
                      }
                    }
                  }
                  var main_rac_my_home_array={
                    level_1:rac_my_home_list_two,
                    level_2:rac_my_home_list_three,
                    level_3:rac_my_home_list_four,
                    level_4:rac_my_home_list_five
                  }
                  /*--------------------------------------------------------------------Rac My-Home---------------------------------------------------------------------------------*/
                  var filter_data_raise_complaint_common_area=_.filter(find_services_data, {'service_type':  'Raise a complaint - Common Area'});
                  var rac_common_area_data= _.groupBy(filter_data_raise_complaint_common_area, function (item) { return item['service_type']});
                  var rac_common_area_list_one=[];
                  var rac_common_area_list_two=[];
                  var rac_common_area_list_three=[];
                  var rac_common_area_list_four=[];
                  var rac_common_area_list_five=[];
                  for(var ds in rac_common_area_data) {
                    var c_service_type_id = new ObjectID();
                    var rac_ca__l0_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                    rac_common_area_list_one.push({type: ds, _id: c_service_type_id,level_id:rac_ca__l0_id_integrated});
                    var groupedOneList = _.groupBy(rac_common_area_data[ds], function (item) {
                      return item['level_1']
                    });
                    for (var l1 in groupedOneList) {
                      var level1_id = new ObjectID();
                      var rac_c_area_l1_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                      rac_common_area_list_two.push({level:"1",name: l1,_id: level1_id,level_id:rac_c_area_l1_id_integrated})
                      var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                        return item['level_2']
                      });
                      for (var l2 in groupedTwoList) {
                        var level2_id = new ObjectID();
                        var rac_c_area_l2_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        rac_common_area_list_three.push({
                          level:"2",
                          name: l2,
                          _id: level2_id,
                          level_id:rac_c_area_l2_id_integrated,
                          parent_id:rac_c_area_l1_id_integrated

                        })
                        var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                          return item['level_3']
                        });
                        for (var l3 in groupedThreeList) {
                          var level3_id = new ObjectID();
                          var rac_c_area_l3_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          rac_common_area_list_four.push({
                            level:"3",
                            name: l3,
                            _id: level3_id,
                            level_id:rac_c_area_l3_id_integrated,
                            parent_id:rac_c_area_l2_id_integrated

                          })
                          var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                            return item['level_4']
                          });
                          for (var l4 in groupedFourList) {
                            var level4_id = new ObjectID();
                            var rac_c_area_l4_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            rac_common_area_list_five.push({
                              level:"4",
                              name: l4,
                              _id: level4_id,
                              level_id:rac_c_area_l4_id_integrated,
                              parent_id:rac_c_area_l3_id_integrated
                            })
                          }
                        }
                      }
                    }
                  }
                  var main_rac_common_area_array={
                    level_1:rac_common_area_list_two,
                    level_2:rac_common_area_list_three,
                    level_3:rac_common_area_list_four,
                    level_4:rac_common_area_list_five
                  }
                  var raise_a_complaint={
                    raise_a_complaint_my_home:main_rac_my_home_array,raise_a_complaint_common_area:main_rac_common_area_array
                  }
                  property_service_array.push(raise_a_complaint)
                  propertyServices[item] =_.cloneDeep(raise_a_complaint);
                 // console.log('=========>'+JSON.stringify(propertyServices));
                  setTimeout(function(){
                    response = {response_status: "success", user_details: element_json_user,properties:properties_array,service_info:propertyServices};
                    deferred.resolve(response);
                  }, 3000);
                }
              });


            }
          }
        })
        var done = this.async();
        setTimeout(done, 500);
      });

          /*_.each(propertyArr1 , function (b) {
            db.services.find({'property_id': b.split("_")[0]}, function (err, find_services_data) {
              if (err) {
                deferred.resolve(errors.senderror(416));
                return deferred.promise;
              } else {
                if(api_request.service_type==1){
                  db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:"Emergency"} ],status:"Completed"}).toArray(function(err,stop_service__details) {
                    if (err) {
                      deferred.resolve(errors.senderror(416));
                      return deferred.promise;
                    } else {
                      var emergency_stop_array_data=[];
                      var emergency_stop_json_data;
                      stop_service__details.forEach(function (e) {
                        emergency_stop_json_data={
                          property_id:e.property_id,
                          flat_id:e.flat_id,
                          service_type:e.service_type,
                          level_1:e.level_1,
                          level_2:e.level_2,
                          level_3:e.level_3,
                          level_4:e.level_4
                        }
                        emergency_stop_array_data.push(emergency_stop_json_data);
                      })
                      var filter_data_emergency=_.filter(find_services_data, {'service_type':  'Emergency'});
                      var emergency_data= _.groupBy(filter_data_emergency, function (item) { return item['service_type']});
                      var emergencyOne=[];
                      var emergencyTwo=[];
                      var emergencyThree=[];
                      var emergencyFour=[];
                      var emergencyFive=[];
                      for(var ds in emergency_data) {
                        var e_service_type_id = new ObjectID();
                        var emergency__l0_id_integrated=find_services_data[0].property_id+'_'+'EM'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        emergencyOne.push({type: ds, _id: e_service_type_id, level_id:emergency__l0_id_integrated});
                        var groupedOneList = _.groupBy(emergency_data[ds], function (item) {
                          return item['level_1']
                        });
                        for (var l1 in groupedOneList) {
                          var level1_id = new ObjectID();
                          var emergency_l1_id_integrated=find_services_data[0].property_id+'_'+'EM-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          emergencyTwo.push({level:"1",name: l1,_id: level1_id,level_id:emergency_l1_id_integrated,parent_id:emergency__l0_id_integrated})
                          var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                            return item['level_2']
                          });
                          for (var l2 in groupedTwoList) {
                            var level2_id = new ObjectID();
                            var emergency_l2_id_integrated=find_services_data[0].property_id+'_'+'EM-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            emergencyThree.push({
                              level:"2",
                              name: l2,
                              _id: level2_id,
                              level_id:emergency_l2_id_integrated,
                              parent_id:emergency_l1_id_integrated

                            })
                            var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                              return item['level_3']
                            });
                            for (var l3 in groupedThreeList) {
                              var level3_id = new ObjectID();
                              var emergency_l3_id_integrated=find_services_data[0].property_id+'_'+'EM-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                              emergencyFour.push({
                                level:"3",
                                name: l3,
                                _id: level3_id,
                                level_id:emergency_l3_id_integrated,
                                parent_id:emergency_l2_id_integrated

                              })
                              var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                                return item['level_4']
                              });
                              for (var l4 in groupedThreeList) {
                                var level4_id = new ObjectID();
                                var emergency_l4_id_integrated=find_services_data[0].property_id+'_'+'EM-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                                emergencyFive.push({
                                  level:"3",
                                  name: l4,
                                  _id: level4_id,
                                  level_id:emergency_l4_id_integrated,
                                  parent_id:emergency_l3_id_integrated
                                })
                              }
                            }
                          }
                        }
                      }
                      var emergency_array={
                        level_1:emergencyTwo,
                        level_2:emergencyThree,
                        level_3:emergencyFour,
                        level_4:emergencyFive
                      }
                      property_service_array.push(emergency_array)
                      propertyServices[b] =_.cloneDeep(emergency_array);
                      console.log('=========>'+JSON.stringify(propertyServices));
                      setTimeout(function(){
                        response = {response_status: "success", user_details: element_json_user,properties:properties_array,service_info:propertyServices,stop_service_info:emergency_stop_array_data};
                        deferred.resolve(response);
                      }, 5000);
                    }
                  });

                }
                else if(api_request.service_type==2){

                  db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:"Directory"} ],status:"Completed"}).toArray(function(err,stop_service__details) {
                    if (err) {
                      deferred.resolve(errors.senderror(416));
                      return deferred.promise;
                    } else {
                      var directory_stop_array_data=[];
                      var directory_stop_json_data;
                      stop_service__details.forEach(function (e) {
                        directory_stop_json_data={
                          property_id:e.property_id,
                          flat_id:e.flat_id,
                          service_type:e.service_type,
                          level_1:e.level_1,
                          level_2:e.level_2,
                          level_3:e.level_3,
                          level_4:e.level_4
                        }
                        directory_stop_array_data.push(directory_stop_json_data);
                      })
                      var filter_data_directory=_.filter(find_services_data, {'service_type':  'Directory'});
                      var directory_data= _.groupBy(filter_data_directory, function (item) { return item['service_type']});
                      var directoryOne=[];
                      var directoryTwo=[];
                      var directoryThree=[];
                      var directoryFour=[];
                      var directoryFive=[];
                      for(var ds in directory_data) {
                        var d_service_type_id = new ObjectID();
                        var directory__l0_id_integrated=find_services_data[0].property_id+'_'+'DR'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        directoryOne.push({type: ds, _id: d_service_type_id,c_id:directory__l0_id_integrated});
                        var groupedOneList = _.groupBy(directory_data[ds], function (item) {
                          return item['level_1']
                        });
                        for (var l1 in groupedOneList) {
                          var level1_id = new ObjectID();
                          var directory_l1_id_integrated=find_services_data[0].property_id+'_'+'DR-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          directoryTwo.push({level:"1",name: l1, _id: level1_id,level_id:directory_l1_id_integrated,parent_id:directory__l0_id_integrated })
                          var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                            return item['level_2']
                          });
                          for (var l2 in groupedTwoList) {
                            var level2_id = new ObjectID();
                            var directory_l2_id_integrated=find_services_data[0].property_id+'_'+'DR-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            directoryThree.push({
                              level:"2",
                              name: l2,
                              _id: level2_id,
                              level_id:directory_l2_id_integrated,
                              parent_id:directory_l1_id_integrated

                            })
                            var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                              return item['level_3']
                            });
                            for (var l3 in groupedThreeList) {
                              var level3_id = new ObjectID();
                              var directory_l3_id_integrated=find_services_data[0].property_id+'_'+'DR-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                              directoryFour.push({
                                level:"3",
                                name: l3,
                                _id: level3_id,
                                level_id:directory_l3_id_integrated,
                                parent_id:directory_l2_id_integrated

                              })
                              var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                                return item['level_4']
                              });
                              for (var l4 in groupedThreeList) {
                                var level4_id = new ObjectID();
                                var directory_l4_id_integrated=find_services_data[0].property_id+'_'+'DR-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                                directoryFive.push({
                                  level:"4",
                                  name: l4,
                                  _id: level4_id,
                                  level_id:directory_l4_id_integrated,
                                  parent_id:directory_l3_id_integrated

                                })
                              }
                            }
                          }
                        }
                      }
                      var directory_array={
                        level_1:directoryTwo,
                        level_2:directoryThree,
                        level_3:directoryFour,
                        level_4:directoryFive
                      }
                      property_service_array.push(directory_array)
                      propertyServices[b] =_.cloneDeep(directory_array);
                      console.log('=========>'+JSON.stringify(propertyServices));
                      setTimeout(function(){
                        response = {response_status: "success", user_details: element_json_user,properties:properties_array,service_info:propertyServices,stop_service_info:directory_stop_array_data};
                        deferred.resolve(response);
                      }, 5000);
                    }
                  });



                }
                else if(api_request.service_type==3){

                  console.log('entered in 3')
                  db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:api_request.service_type} ],status:"Completed"}).toArray(function(err,stop_service__details) {
                    if(err){
                      deferred.resolve(errors.senderror(416));
                      return deferred.promise;
                    }else{
                      console.log('stop_service__details::::'+JSON.stringify(stop_service__details))
                      var ds_stop_array_data=[];
                      var ds_stop_json_data;
                      stop_service__details.forEach(function (e) {
                        ds_stop_json_data={
                          property_id:e.property_id,
                          property_name:e.property_name,
                          phase_name:e.phase_name ? "" : e.phase_name,
                          tower_name:e.tower_name ? "" : e.tower_name,
                          flat_id:e.flat_id,
                          flat_name:e.flat_name,
                          service_type:e.service_type,
                          level_1:e.level_1,
                          level_2:e.level_2,
                          level_3:e.level_3,
                          level_4:e.level_4
                        }
                        ds_stop_array_data.push(ds_stop_json_data);
                      })
                      //console.log('stopServiceArray>>'+JSON.stringify(stopServiceArray));
                      var filter_data_daily_services=_.filter(find_services_data, {'service_type':  'Daily Services'});
                      var daily_data= _.groupBy(filter_data_daily_services, function (item) { return item.service_type});
                      // console.log('filter_data_daily_services:::::'+JSON.stringify(filter_data_daily_services));
                      // console.log('daily_data:::::'+JSON.stringify(daily_data));
                      var dailyListOne=[];
                      var dailyListTwo=[];
                      var dailyListThree=[];
                      var dailyListFour=[];
                      var dailyListFive=[];
                      for(var t in daily_data) {
                        var service_type_id = new ObjectID();
                        var ds_l0_id_integrated=find_services_data[0].property_id+'_'+'DS-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        dailyListOneJson={
                          type: t, _id: service_type_id, level_id:ds_l0_id_integrated
                        }

                        dailyListOne.push(dailyListOneJson);
                        //console.log('=*********'+JSON.stringify(dailyListOneJson))


                        var groupedOneList = _.groupBy(daily_data[t], function (item) {
                          return item['level_1']
                        });
                        for (var l in groupedOneList) {
                          var level1_id = new ObjectID();
                          var ds_l1_id_integrated=find_services_data[0].property_id+'_'+'DS-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          dailyListTwoJson={
                            level:"1",service_name:l, _id: level1_id,level_id:ds_l1_id_integrated, parent_id:ds_l0_id_integrated
                          }

                          dailyListTwo.push(dailyListTwoJson)
                          var groupedTwoList = _.groupBy(groupedOneList[l], function (item) {
                            return item['level_2']
                          });
                          for (var m in groupedTwoList) {
                            var level2_id = new ObjectID();
                            var ds_l2_id_integrated=find_services_data[0].property_id+'_'+'DS-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            dailyListThreeJson={
                              level:"2",service_name: m, _id: level2_id,level_id:ds_l2_id_integrated, parent_id:ds_l1_id_integrated
                            }

                            dailyListThree.push(dailyListThreeJson)
                            var groupedThreeList = _.groupBy(groupedTwoList[m], function (item) {
                              return item['level_3']
                            });
                            for (var n in groupedThreeList) {
                              var level3_id = new ObjectID();
                              var ds_l3_id_integrated=find_services_data[0].property_id+'_'+'DS-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                              dailyListFourJson={
                                level:"3", service_name: n, _id: level3_id,level_id:ds_l3_id_integrated, parent_id:ds_l2_id_integrated
                              }

                              dailyListFour.push(dailyListFourJson)
                              var groupedFourList = _.groupBy(groupedThreeList[n], function (item) {
                                return item['level_4']
                              });
                              for (var o in groupedFourList) {
                                var level4_id = new ObjectID();
                                var ds_l4_id_integrated=find_services_data[0].property_id+'_'+'DS-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                                var dailyListFiveJson={
                                  level:"4",service_name: o, _id: level4_id,level_id:ds_l4_id_integrated, parent_id:ds_l3_id_integrated
                                }

                                dailyListFive.push(dailyListFiveJson)
                              }
                            }
                          }
                        }
                      }
                      //  propertyServices[b] = [];
                      var main_ds_array={
                        level_1:dailyListTwo,
                        level_2:dailyListThree,
                        level_3:dailyListFour,
                        level_4:dailyListFive
                      }
                      //console.log('main_ds_array=========>'+JSON.stringify(main_ds_array));

                      property_service_array.push(main_ds_array)
                      //  propertyServices[b].push(main_ds_array);
                      propertyServices[b] =_.cloneDeep(main_ds_array);

                      setTimeout(function(){
                        response = {response_status: "success",user_details: element_json_user,properties:properties_array,service_info:propertyServices,stop_service_info:ds_stop_array_data};
                        deferred.resolve(response);
                      }, 2000);
                      //  propertyServices = {};
                    }
                  });



                }
                else if(api_request.service_type==4){

                //  db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) } , { service_type:"Daily Services"} ],$or: [ { status:  "Assigned" } , { status:"Accepted"} ]}).toArray(function(err,stop_service__details) {
                  db.services_complaint.find({ $and: [ { resident_id:  ObjectID(id) }] ,$or: [ { service_type:  "Raise a complaint - My home" } , { service_type:"Raise a complaint - Common Area"} ] ,status:"Completed"}).toArray(function(err,stop_service__details) {
                    if (err) {
                      deferred.resolve(errors.senderror(416));
                      return deferred.promise;
                    } else {
                      var rac_stop_array_data=[];
                      var rac_stop_json_data;
                      stop_service__details.forEach(function (e) {
                        rac_stop_json_data={
                          property_id:e.property_id,
                          flat_id:e.flat_id,
                          service_type:e.service_type,
                          level_1:e.level_1,
                          level_2:e.level_2,
                          level_3:e.level_3,
                          level_4:e.level_4
                        }
                        rac_stop_array_data.push(rac_stop_json_data);
                      })
                      var filter_data_raise_complaint_my_home=_.filter(find_services_data, {'service_type':  'Raise a complaint - My home'});
                      var rac_my_home_data= _.groupBy(filter_data_raise_complaint_my_home, function (item) { return item['service_type']});
                      var rac_my_home_list_one=[];
                      var rac_my_home_list_two=[];
                      var rac_my_home_list_three=[];
                      var rac_my_home_list_four=[];
                      var rac_my_home_list_five=[];
                      for(var ds in rac_my_home_data) {
                        var h_service_type_id = new ObjectID();
                        var rac_l0_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        rac_my_home_list_one.push({type: ds, _id: h_service_type_id,level_id:rac_l0_id_integrated});
                        var groupedOneList = _.groupBy(rac_my_home_data[ds], function (item) {
                          return item['level_1']
                        });
                        for (var l1 in groupedOneList) {
                          var level1_id = new ObjectID();
                          var rac_my_home_l1_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          rac_my_home_list_two.push({level:"1",name: l1, _id: level1_id,level_id:rac_my_home_l1_id_integrated ,parent_id:rac_l0_id_integrated})
                          var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                            return item['level_2']
                          });
                          for (var l2 in groupedTwoList) {
                            var level2_id = new ObjectID();
                            var rac_my_home_l2_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            rac_my_home_list_three.push({
                              level:"2",
                              name: l2,
                              level_id: rac_my_home_l2_id_integrated,
                              _id: level2_id,
                              parent_id:rac_my_home_l1_id_integrated

                            })
                            var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                              return item['level_3']
                            });
                            for (var l3 in groupedThreeList) {
                              var level3_id = new ObjectID();
                              var rac_my_home_l3_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                              rac_my_home_list_four.push({
                                level:"3",
                                name: l3,
                                _id: level3_id,
                                level_id:rac_my_home_l3_id_integrated,
                                parent_id:rac_my_home_l2_id_integrated

                              })
                              var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                                return item['level_4']
                              });
                              for (var l4 in groupedFourList) {
                                var level4_id = new ObjectID();

                                var rac_my_home_l4_id_integrated=find_services_data[0].property_id+'_'+'RAC-MH-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                                rac_my_home_list_five.push({
                                  level:"4",
                                  name: l4,
                                  _id: level4_id,
                                  level_id:rac_my_home_l4_id_integrated,
                                  parent_id:rac_my_home_l3_id_integrated

                                })
                              }
                            }
                          }
                        }
                      }
                      var main_rac_my_home_array={
                        level_1:rac_my_home_list_two,
                        level_2:rac_my_home_list_three,
                        level_3:rac_my_home_list_four,
                        level_4:rac_my_home_list_five
                      }
                      /!*--------------------------------------------------------------------Rac My-Home---------------------------------------------------------------------------------*!/
                      var filter_data_raise_complaint_common_area=_.filter(find_services_data, {'service_type':  'Raise a complaint - Common Area'});
                      var rac_common_area_data= _.groupBy(filter_data_raise_complaint_common_area, function (item) { return item['service_type']});
                      var rac_common_area_list_one=[];
                      var rac_common_area_list_two=[];
                      var rac_common_area_list_three=[];
                      var rac_common_area_list_four=[];
                      var rac_common_area_list_five=[];
                      for(var ds in rac_common_area_data) {
                        var c_service_type_id = new ObjectID();
                        var rac_ca__l0_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                        rac_common_area_list_one.push({type: ds, _id: c_service_type_id,level_id:rac_ca__l0_id_integrated});
                        var groupedOneList = _.groupBy(rac_common_area_data[ds], function (item) {
                          return item['level_1']
                        });
                        for (var l1 in groupedOneList) {
                          var level1_id = new ObjectID();
                          var rac_c_area_l1_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L1-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                          rac_common_area_list_two.push({level:"1",name: l1,_id: level1_id,level_id:rac_c_area_l1_id_integrated})
                          var groupedTwoList = _.groupBy(groupedOneList[l1], function (item) {
                            return item['level_2']
                          });
                          for (var l2 in groupedTwoList) {
                            var level2_id = new ObjectID();
                            var rac_c_area_l2_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L2-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                            rac_common_area_list_three.push({
                              level:"2",
                              name: l2,
                              _id: level2_id,
                              level_id:rac_c_area_l2_id_integrated,
                              parent_id:rac_c_area_l1_id_integrated

                            })
                            var groupedThreeList = _.groupBy(groupedTwoList[l2], function (item) {
                              return item['level_3']
                            });
                            for (var l3 in groupedThreeList) {
                              var level3_id = new ObjectID();
                              var rac_c_area_l3_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L3-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                              rac_common_area_list_four.push({
                                level:"3",
                                name: l3,
                                _id: level3_id,
                                level_id:rac_c_area_l3_id_integrated,
                                parent_id:rac_c_area_l2_id_integrated

                              })
                              var groupedFourList = _.groupBy(groupedThreeList[l3], function (item) {
                                return item['level_4']
                              });
                              for (var l4 in groupedFourList) {
                                var level4_id = new ObjectID();
                                var rac_c_area_l4_id_integrated=find_services_data[0].property_id+'_'+'RAC-CA-L4-'+parseInt(Math.floor((Math.random() * 1000000) + 1))+1;
                                rac_common_area_list_five.push({
                                  level:"4",
                                  name: l4,
                                  _id: level4_id,
                                  level_id:rac_c_area_l4_id_integrated,
                                  parent_id:rac_c_area_l3_id_integrated
                                })
                              }
                            }
                          }
                        }
                      }
                      var main_rac_common_area_array={
                        level_1:rac_common_area_list_two,
                        level_2:rac_common_area_list_three,
                        level_3:rac_common_area_list_four,
                        level_4:rac_common_area_list_five
                      }
                      var raise_a_complaint={
                        raise_a_complaint_my_home:main_rac_my_home_array,raise_a_complaint_common_area:main_rac_common_area_array
                      }
                      property_service_array.push(raise_a_complaint)
                      propertyServices[b] =_.cloneDeep(raise_a_complaint);
                      console.log('=========>'+JSON.stringify(propertyServices));
                      setTimeout(function(){
                        response = {response_status: "success", user_details: element_json_user,properties:properties_array,service_info:{raise_a_complaint:raise_a_complaint,stop_service_info:rac_stop_array_data}};
                        deferred.resolve(response);
                      }, 7000);
                    }
                  });


                }
              }
            })
          })*/



    }
  });

  return deferred.promise;
}

/*************** Web-service for the individual resident to submit final request **********/

apiFunctions['resident_request_final_submit']=function (api_request,user_details) {

  console.log('**********api_request************'+JSON.stringify(api_request));
  // console.log('**********resident_request_final_submit************'+JSON.stringify(user_details._id));
  var deferred = Q.defer();
  var user_id=user_details._id;
  var service_type=api_request.service_type;
  var static_level=api_request.static_level;
  var property_name=api_request.property.name;
  var property_id=api_request.property.id;
  var phase_name=api_request.property.phase_name;
  var tower_name=api_request.property.tower_name;
  var flat_id=api_request.property.flat_id;
  var flat_name=api_request.property.flat_name;
  var level_1=api_request.level_1;
  var level_2=api_request.level_2;
  var level_3=api_request.level_3;
  var level_4=api_request.level_4;
  var rac_service_type;
  //var id=api_request._id;

  // console.log('service_type'+service_type +'static_level'+static_level+'property_name'+property_name+'property_id:::'+property_id+'level_1::'+level_1+'level_2::'+level_2+'level_3::'+level_3+'level_4::'+level_4)
  var count=0001;
  var dt=moment().format("DMMMYY").toUpperCase();
  console.log(dt)
  if(api_request.service_type==1){
    service_type='Emergency'
  }else if(api_request.service_type==2){
    service_type='Directory'
  }else if(api_request.service_type==3){
    service_type='Daily Services'
    console.log('cool'+service_type)
  }else if(api_request.service_type==4){
    service_type='Raise a complaint - My home'
    rac_service_type='Raise a complaint - Common Area';
    console.log('hot>>>>>>'+service_type)
  }
  var date = new Date();
  var p_date=(date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
  var hours = date.getHours();
  var minutes=date.getMinutes();
  var today=new Date();
  var noon=new Date(today.getFullYear(),today.getMonth(),today.getDate(),12,0,0);
  var ampm = (today.getTime()<noon.getTime())?'am':'pm';
  console.log(noon+"================="+ampm)
  db.user.findOne({_id:ObjectID(user_id)},function (err,find_resident_name) {
    if(err){
      deferred.resolve(errors.senderror(416));
      return deferred.promise;
    }else{
      db.services.findOne({$or: [ { service_type:  service_type } , { service_type:rac_service_type} ], $and: [{"property_id":property_id},{ "level_1":level_1 }, { "level_2": level_2 } ,{ "level_3": level_3 },{"level_4":level_4}] },function (err, result) {
        if(err){
          console.log('1------------->'+err)
          deferred.resolve(errors.senderror(416));
          return deferred.promise;
        }else{
          console.log('result::::::::::'+JSON.stringify(result));
          if(result == null || result == '' || result == undefined){
            response = {response_status: "success", user_details: []};
            deferred.resolve(response);
          }else{
            db.user.find({"property_id":property_id,"request_types":new RegExp(result.request_id),Active:'ON'},function(err,find_service_provider){
              if(err){
                deferred.resolve(errors.senderror(416));
                return deferred.promise;
              }else{
                if(find_service_provider== null || find_service_provider =='' || find_service_provider== undefined){
                  response = {response_status: "success", user_details: []};
                  deferred.resolve(response);
                }else{
                  var sp_list_array=[];
                  console.log('service_provider:::::'+JSON.stringify(find_service_provider));
                  var sp_list_array = _.map(find_service_provider ,function (a){
                    return  a._id
                  });
                  /* var sp_id_list_array = _.map(find_service_provider ,function (a){
                     return  a.id
                   });*/
                  var sp_name_list = _.map(find_service_provider ,function (a){
                    return  a.first_name+' '+a.last_name;
                  });
                  var sp_phone_list = _.map(find_service_provider ,function (a){
                    return  a.phone_number;
                  });
                  var sp_email_list = _.map(find_service_provider ,function (a){
                    return  a.email_id;
                  });
                  //console.log('sp_id_list_array>>>>'+JSON.stringify(sp_id_list_array))
                  //console.log('sp_list_array>>>>'+JSON.stringify(sp_list_array))

                  var sp_array=[];
                  var time = moment().utc();
                  console.log('time>>>'+time);
                  time.add(parseFloat(result.sla_time), 'hours'); // time operations follow time-math logic
                  var c_time = time.format();
                  console.log("sssss>"+c_time)
                  var mzone=moment(time, "YYYY MMM DD HH:MM:SS");
                  console.log('mzone::::'+mzone);
                  var splitted_c_time=_.split(c_time,"Z")[0];
                  console.log(new Date()+'splitted_time>>>>>'+splitted_c_time)
                  var date_of_request_booked=moment().format();
                  var splitted_request_booked_time=_.split(date_of_request_booked,"Z")[0];
                  var updated_time=moment(splitted_request_booked_time).add(parseFloat(result.sla_time),'hours').format();
                  console.log(date_of_request_booked+'**********'+updated_time)
                  console.log(time.format()+'splitted_request_booked_time>>>>>'+splitted_request_booked_time)
                  //db.services_complaint.find({},{property_id:result.property_id, request_id:result.request_id}).sort({date_of_request_booked:-1}).limit(1).toArray(function (err, find_assigned_service_provider) {
                  db.services_complaint.find({"property_id":result.property_id,request_id:result.request_id}).sort({ date_of_request_booked : -1 }).limit(1).toArray(function (err, find_assigned_service_provider) {
                    if (err) {
                      console.log('2------------->'+err)
                      deferred.resolve(errors.senderror(416));
                      return deferred.promise;
                    } else {

                      if(find_assigned_service_provider.length==0){
                        console.log('inside if:::::::::'+find_assigned_service_provider.length)
                        var inserted_array = {
                          resident_id: user_id === undefined ? "" : user_id,
                          resident_name: find_resident_name.first_name + ' ' + find_resident_name.last_name,
                          resident_number: find_resident_name.phone_number,
                          resident_email: find_resident_name.email_id,
                          // service_provider: sp_id_list_array[0],
                          service_provider_id: sp_list_array[0],
                          service_provider_name: sp_name_list[0],
                          service_provider_phone_number: sp_phone_list[0],
                          service_provider_email_id: sp_email_list[0],
                          request_id:result.request_id,
                          static_level:static_level,
                          service_type: service_type == undefined ? "" : api_request.service_type,
                          property_id: property_id == undefined ? "" : property_id,
                          property_name:property_name== undefined ? "" : property_name,
                          phase_name:phase_name== undefined ? "" : phase_name,
                          tower_name:tower_name== undefined ? "" : tower_name,
                          flat_id: flat_id == undefined ? "" : flat_id,
                          flat_name: flat_name == undefined ? "" : flat_name,
                          level_1: level_1 == undefined ? "" : level_1,
                          level_2: level_2 == undefined ? "" : level_2,
                          level_3: level_3 == undefined ? "" : level_3,
                          level_4: level_4 == undefined ? "" : level_4,
                          sla_time:parseFloat(result.sla_time),
                          date_of_request_booked:date_of_request_booked,
                          booked_time:hours+'.'+minutes+' '+ampm,
                          completion_time:updated_time,
                          created_on:new Date(),
                          request_number: dt + "-0" + count,
                          status: "Assigned",
                          flag:"Start"
                        }
                        db.services_complaint.find({}, {request_number: 1}).sort({date_of_request_booked: -1}).limit(1).toArray(function (err, data) {
                          if (err) {
                            deferred.resolve(errors.senderror(416));
                            return deferred.promise;
                          } else {
                            console.log('data::::' + JSON.stringify(data))
                            if (data.length != 0) {
                              var d = data[0].request_number;
                              var dSplit = d.split("-0");
                              var newTicketId = dt + "-0" + (parseInt(dSplit[1]) + 1);
                              inserted_array["request_number"] = newTicketId;
                            }

                            db.services_complaint.insert(inserted_array, function (err, final_result) {
                              if (err) {
                                deferred.resolve(errors.senderror(416));
                                return deferred.promise;
                              } else {
                                var user = [final_result];
                                response = {response_status: "success", user_details: user};
                                deferred.resolve(response);
                              }
                            })
                          }
                        })
                      }
                      else{
                        console.log("find_assigned_service_provider:::::"+JSON.stringify(find_assigned_service_provider));
                        var sp_fetched_name_list_array = _.map(find_assigned_service_provider ,function (a){
                          return  a.service_provider
                        });
                        var sp_fetched_id_list_array = _.map(find_assigned_service_provider ,function (a){
                          return  a.service_provider_id
                        });
                        var sp_name_list_else = _.map(find_assigned_service_provider ,function (a){
                          return  a.service_provider_name;
                        });
                        var sp_phone_list_else = _.map(find_assigned_service_provider ,function (a){
                          return  a.service_provider_phone_number;
                        });
                        var sp_email_list_else = _.map(find_assigned_service_provider ,function (a){
                          return  a.service_provider_email_id;
                        });
                        console.log('sp_fetched_id_list_array>>>>>>>>>',sp_fetched_id_list_array)
                        console.log('sp_fetched_name_list_array>>>>>>>>>',sp_fetched_name_list_array)
                        // var filtered_sp=_.difference(sp_id_list_array, sp_fetched_id_list_array);
                        // console.log('filtered_sp::::'+JSON.stringify(filtered_sp))

                        var duplicate_sp_name=[];
                        var duplicate_sp_id=[];
                        var duplicate_sp_fullname=[];
                        var duplicate_sp_phone_number=[];
                        var duplicate_sp_email_id=[];
                        /*  _.each(sp_fetched_name_list_array , function(a){
                            _.each(sp_id_list_array,function(b){
                              if(_.isEqual(a ,b)){
                                duplicate_sp_name.push(_.indexOf(sp_id_list_array,b));
                              }
                            })
                          })*/
                        _.each(sp_fetched_id_list_array , function(a){
                          _.each(sp_list_array,function(b){
                            if(_.isEqual(a ,b)){
                              duplicate_sp_id.push(_.indexOf(sp_list_array,b));
                            }
                          })
                        })
                        _.each(sp_name_list_else , function(a){
                          _.each(sp_name_list,function(b){
                            if(_.isEqual(a ,b)){
                              duplicate_sp_fullname.push(_.indexOf(sp_name_list,b));
                            }
                          })
                        })
                        _.each(sp_phone_list_else , function(a){
                          _.each(sp_phone_list,function(b){
                            if(_.isEqual(a ,b)){
                              duplicate_sp_phone_number.push(_.indexOf(sp_phone_list,b));
                            }
                          })
                        })
                        _.each(sp_email_list_else , function(a){
                          _.each(sp_email_list,function(b){
                            if(_.isEqual(a ,b)){
                              duplicate_sp_email_id.push(_.indexOf(sp_email_list,b));
                            }
                          })
                        })
                        //  console.log('duplicate',duplicate_sp_name,sp_id_list_array[duplicate_sp_name[0]+1]);
                        //  console.log('duplicate_sp_id',duplicate_sp_id,sp_list_array[duplicate_sp_id[0]+1]);
                        var sp_name;
                        var sp_id;
                        var sp_fullname;
                        var sp_phone_number;
                        var sp_email_id;
                        /*  if(sp_id_list_array[duplicate_sp_name[0]+1]== undefined || sp_id_list_array[duplicate_sp_name[0]+1]== null ){
                            sp_name=sp_id_list_array[0]
                          }else{
                            sp_name= sp_id_list_array[duplicate_sp_name[0]+1];
                            console.log('sp_name>>>>>>>>'+sp_name)
                          }*/
                        if(sp_list_array[duplicate_sp_id[0]+1]== undefined || sp_list_array[duplicate_sp_id[0]+1]== null ){
                          sp_id=sp_list_array[0]
                        }else{
                          sp_id= sp_list_array[duplicate_sp_id[0]+1];
                        }
                        if(sp_name_list[duplicate_sp_fullname[0]+1]== undefined || sp_name_list[duplicate_sp_fullname[0]+1]== null ){
                          sp_fullname=sp_name_list[0]
                        }else{
                          sp_fullname= sp_name_list[duplicate_sp_fullname[0]+1];
                        }
                        if(sp_phone_list[duplicate_sp_phone_number[0]+1]== undefined || sp_phone_list[duplicate_sp_phone_number[0]+1]== null ){
                          sp_phone_number=sp_phone_list[0]
                        }else{
                          sp_phone_number= sp_phone_list[duplicate_sp_phone_number[0]+1];
                        }
                        if(sp_email_list[duplicate_sp_email_id[0]+1]== undefined || sp_email_list[duplicate_sp_email_id[0]+1]== null ){
                          sp_email_id=sp_email_list[0]
                        }else{
                          sp_email_id= sp_email_list[duplicate_sp_email_id[0]+1];
                        }

                        var inserted_array = {
                          resident_id: user_id === undefined ? "" : user_id,
                          resident_name: find_resident_name.first_name + ' ' + find_resident_name.last_name,
                          resident_number: find_resident_name.phone_number,
                          resident_email: find_resident_name.email_id,
                          // service_provider: sp_name,
                          service_provider_id: sp_id,
                          service_provider_name: sp_fullname,
                          service_provider_phone_number: sp_phone_number,
                          service_provider_email_id: sp_email_id,
                          request_id:result.request_id,
                          static_level:static_level,
                          service_type: service_type == undefined ? "" : api_request.service_type,
                          property_id: property_id == undefined ? "" : property_id,
                          property_name:property_name== undefined ? "" : property_name,
                          phase_name:phase_name== undefined ? "" : phase_name,
                          tower_name:tower_name== undefined ? "" : tower_name,
                          flat_id: flat_id == undefined ? "" : flat_id,
                          flat_name: flat_name == undefined ? "" : flat_name,
                          level_1: level_1 == undefined ? "" : level_1,
                          level_2: level_2 == undefined ? "" : level_2,
                          level_3: level_3 == undefined ? "" : level_3,
                          level_4: level_4 == undefined ? "" : level_4,
                          sla_time:parseFloat(result.sla_time),
                          date_of_request_booked:date_of_request_booked,
                          booked_time:hours+'.'+minutes+' '+ampm,
                          completion_time:updated_time,
                          created_on:new Date(),
                          request_number: dt + "-0" + count,
                          status: "Assigned",
                          flag:"Start"
                        }
                        db.services_complaint.find({}, {request_number: 1}).sort({date_of_request_booked: -1}).limit(1).toArray(function (err, data) {
                          if (err) {
                            console.log('3------------->'+err)
                            deferred.resolve(errors.senderror(416));
                            return deferred.promise;
                          } else {
                            console.log('data::::' + JSON.stringify(data))
                            if (data.length != 0) {
                              var d = data[0].request_number;
                              var dSplit = d.split("-0");
                              var newTicketId = dt + "-0" + (parseInt(dSplit[1]) + 1);
                              inserted_array["request_number"] = newTicketId;
                            }

                            db.services_complaint.insert(inserted_array, function (err, final_result) {
                              if (err) {
                                console.log('4------------->'+err)
                                deferred.resolve(errors.senderror(416));
                                return deferred.promise;
                              } else {
                                var user = [final_result];
                                db.user.findOne({_id:ObjectID(sp_id)},function (err,find_specific_service_provider) {
                                  if(err){
                                    console.log('5------------->'+err)
                                    deferred.resolve(errors.senderror(416));
                                    return deferred.promise;
                                  }else{
                                    if(find_specific_service_provider== null || find_specific_service_provider== '' || find_specific_service_provider==undefined){
                                      response = {response_status: "success", user_details: []};
                                      deferred.resolve(response);
                                    }else{
                                      console.log('find_specific_service_provider>>>>'+JSON.stringify(find_specific_service_provider));
                                      console.log('device_token>>>>'+JSON.stringify(find_specific_service_provider.device_token));
                                     /* if(find_specific_service_provider.device_token== undefined || find_specific_service_provider.device_token==null || find_specific_service_provider.device_token==''){
                                        deferred.resolve(errors.senderror(456));
                                        return deferred.promise;
                                      }else{
                                            var data = {
                                              device_id:find_specific_service_provider.device_token,
                                              data: {
                                                "notification_type": "3",
                                                "title":"Request Received",
                                                "message":"It's a request for the specific services",
                                                "click_action": "ASSIGN_TO_SERVICE_PROVIDER"
                                              },
                                              notify_data:{
                                                title: "Request Received",
                                                body: "It's a request for the specific services",
                                                click_action: "ASSIGN_TO_SERVICE_PROVIDER",
                                                tag: "alert"
                                              }
                                            }

                                        pushNotificationService.sendNotification(data).then(function(result){
                                          console.log(result);
                                          response = {response_status: "success", user_details: user};
                                          deferred.resolve(response);
                                        });
                                      }*/

                                      response = {response_status: "success", user_details: user};
                                      deferred.resolve(response);
                                    }
                                  }
                                });


                              }
                            })
                          }
                        })
                      }
                    }
                  })
                }
              }

            })
          }

        }
      })
    }
  })
  return deferred.promise;
}

/*************** Web-service for the individual Service-Provider to check the Assigned Request Date wise **********/

apiFunctions['service_provider_request_list']=function (api_request,request_details) {
  console.log('<<<<<----------service_provider_request_list---------->>>>>'+JSON.stringify(api_request))
  console.log('<<<<<----------request_details---------->>>>>'+JSON.stringify(request_details))
  var deferred = Q.defer();
  var dt_json={};
  var dt_array_greater=[];
  var dt_array_smaller=[];
  var smaller_array=[];
  var greater_array=[];
  var status=api_request.status;
  var service_provider_id = request_details._id;
  console.log(status)
  console.log('========'+JSON.stringify(request_details));
  db.remarks.findOne({},function(err,find_remarks){
    if(err){
      console.log(err);
    }else{
      db.services_complaint.find({ $and: [{"service_provider_id":ObjectID(service_provider_id)},{"status":status}]}).sort({ created_on : 1 }).toArray(function(err,data){
        if(err){
          deferred.resolve(errors.senderror(416));
          return deferred.promise;
        }else{
          /*if(data.length==0){
             response = {response_status: "success", inProgress_data:[], elapsed_data:[]};
             deferred.resolve(response);
           }*/
          //  else{
         // console.log('data:::::::'+JSON.stringify(find_remarks))
          for(var i =0; i < data.length; i++){
            var d = new Date();
            if(moment(data[i].date_of_request_booked) >= moment.now()){
              dt_array_greater.push(data[i]);
            }else if (moment(data[i].date_of_request_booked) <= moment.now()) {
              // console.log("smaller",data[i].date_of_request_booked , moment.now() );
              dt_array_smaller.push(data[i]);
            } else {
              console.log("<-------------inside else------------->");

            }
          }

          dt_array_greater.forEach(function (g) {
            var greater_json={
              property_id:g.property_id,
              property_name:g.property_name,
              phase_name:g.phase_name ,
              tower_name:g.tower_name,
              resident_name:g.resident_name,
              flat_id:g.flat_id,
              flat_name:g.flat_name,
              static_level:g.static_level,
              service_type:g.service_type,
              level_1:g.level_1,
              level_2:g.level_2,
              level_3:g.level_3,
              level_4:g.level_4,
              date_of_request_booked:g.date_of_request_booked,
              sla_time:g.sla_time,
              completion_time:g.completion_time,
              request_number:g.request_number,
              // created_on:g.created_on,
              status:g.status
            }
            greater_array.push(greater_json);
          })

          dt_array_smaller.forEach(function (e) {
            var smaller_json={
              property_id:e.property_id,
              property_name:e.property_name,
              phase_name:e.phase_name ,
              tower_name:e.tower_name ,
              resident_name:e.resident_name,
              flat_id:e.flat_id,
              flat_name:e.flat_name,
              static_level:e.static_level,
              service_type:e.service_type,
              level_1:e.level_1,
              level_2:e.level_2,
              level_3:e.level_3,
              level_4:e.level_4,
              date_of_request_booked:e.date_of_request_booked,
              sla_time:e.sla_time,
              completion_time:e.completion_time,
              request_number:e.request_number,
              // created_on:e.created_on,
              status:e.status
            }
            smaller_array.push(smaller_json);
          })

          dt_array_smaller.sort(function(a,b){
            return new Date(b.created_on) - new Date(a.created_on);
          });

          /*var remarks_list = _.map(find_remarks.remarks ,function (r){
            return  r.name;
          });*/
          response = {response_status: "success", status:status, inProgress_data:greater_array, elapsed_data:smaller_array};
          deferred.resolve(response);

          //  }

        }
      });
    }
  });
  return deferred.promise;
}

/*************** Web-service for the individual Service-Provider to make the assigned request Completed/Partially-Completed **********/

apiFunctions['service_provider_updated_request'] = function (api_request, request_details) {
  console.log('<<<<<---------service_provider_updated_request----------->>>>>' + JSON.stringify(api_request))
  console.log('request_details>>>>>>>' + JSON.stringify(request_details))
  var req_id = api_request.id;
  var service_provider_id = request_details._id;
  var status = api_request.status;
  var remarks = api_request.remarks;
  var request_number = api_request.request_number;
  console.log('service_provider_id>>>' + service_provider_id)
  var deferred = Q.defer();
      db.services_complaint.findOne({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, function (err, find_data) {
        if (err) {
          deferred.resolve(errors.senderror(416));
          return deferred.promise;
        } else {
          if(find_data== null || find_data== '' || find_data == undefined){
            response = {response_status: "success"};
            deferred.resolve(response);
          }else{
            db.user.findOne({_id: find_data.resident_id}, function (err, find_resident) {
              if (err) {
                deferred.resolve(errors.senderror(416));
                return deferred.promise;
              } else {
                if(find_resident == null || find_resident== '' || find_resident ==undefined){
                  response = {response_status: "success"};
                  deferred.resolve(response);
                }else{
                  console.log(find_resident.device_token+'find_resident>>>>' + JSON.stringify(find_resident))
                  if (status == 'Accepted') {
                    console.log('inside Accepted');
                    db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {status: status}}, function (err, accepted_data) {
                      if (err) {
                        return err;
                      } else {
                        /*if(find_resident.device_token== undefined || find_resident.device_token==null || find_resident.device_token==''){
                          deferred.resolve(errors.senderror(456));
                          return deferred.promise;
                        }else{

                          var data = {
                            device_id: find_resident.device_token,
                            data: {
                              "notification_type": "1",
                              "title": "Request Accepted",
                              "message": "Your request is accepted by the service-provider",
                              "click_action": "SERVICE_PROVIDER_ACCEPTED_ALERT_TRIGGERED"
                            },
                            notify_data: {
                              title: "Request Accepted",
                              body: "Your request is accepted by the service-provider",
                              click_action: "SERVICE_PROVIDER_ACCEPTED_ALERT_TRIGGERED",
                              tag: "alert"
                            }
                          }

                          pushNotificationService.sendNotification(data).then(function (result) {
                            console.log(result);
                            response = {response_status: "success"};
                            deferred.resolve(response);
                          });
                        }*/
                        response = {response_status: "success"};
                        deferred.resolve(response);
                      }
                    });


                  }
                  else if (status == 'Completed') {
                    console.log('inside Completed');
                    db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {status: status}}, function (err, completed_data) {
                      if (err) {
                        return err;
                      } else {
                        /*if(find_resident.device_token== undefined || find_resident.device_token==null || find_resident.device_token==''){
                          deferred.resolve(errors.senderror(456));
                          return deferred.promise;
                        }else{
                          console.log("token>>>"+find_resident.device_token)
                          var data = {
                            device_id: find_resident.device_token,
                            data: {
                              "notification_type": "1",
                              "title": "Request Completed",
                              "message": "The request is being completed by the service-provider",
                              "click_action": "SERVICE_PROVIDER_COMPLETED_ALERT_TRIGGERED"
                            },
                            notify_data: {
                              title: "Request Completed",
                              body: "The request is being completed by the service-provider",
                              click_action: "SERVICE_PROVIDER_COMPLETED_ALERT_TRIGGERED",
                              tag: "alert"
                            }
                          }

                          pushNotificationService.sendNotification(data).then(function (result) {
                            console.log(result);
                            response = {response_status: "success"};
                            deferred.resolve(response);
                          });
                        }*/
                        response = {response_status: "success"};
                        deferred.resolve(response);
                      }
                    });


                  } else {
                    console.log('inside Partially-Completed')
                    db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {status: status}}, function (err, pc_data) {
                      if (err) {
                        return err;
                      } else {
                        /*if(find_resident.device_token== undefined || find_resident.device_token==null || find_resident.device_token==''){
                          deferred.resolve(errors.senderror(456));
                          return deferred.promise;
                        }else{
                          console.log("token>>>"+find_resident.device_token)
                          var data = {
                            device_id: find_resident.device_token,
                            data: {
                              "notification_type": "1",
                              "title": "Request Completed",
                              "message": "The request is being completed by the service-provider",
                              "click_action": "SERVICE_PROVIDER_COMPLETED_ALERT_TRIGGERED"
                            },
                            notify_data: {
                              title: "Request Completed",
                              body: "The request is being completed by the service-provider",
                              click_action: "SERVICE_PROVIDER_COMPLETED_ALERT_TRIGGERED",
                              tag: "alert"
                            }
                          }

                          pushNotificationService.sendNotification(data).then(function (result) {
                            console.log(result);
                            response = {response_status: "success"};
                            deferred.resolve(response);
                          });
                        }*/
                        response = {response_status: "success", message: 'Your task is' + ' ' + status};
                        deferred.resolve(response);
                      }
                    });

                  }
                }


              }
            });
          }


        }
      });
  return deferred.promise;
}

/*************** Web-service for the resident_request_not_completed_by_service_provider*********/

apiFunctions['request_list_not_rated_yet']=function (api_request,request_details) {
  console.log('resident_request_not_completed_by_service_provider----------->>>>>'+JSON.stringify(api_request))
  console.log('request_details>>>>>>>'+JSON.stringify(request_details))
  var resident_id=request_details._id;
  var deferred = Q.defer();
  db.services_complaint.find({resident_id:ObjectID(resident_id),$or: [ { status:  "Assigned" } , { status:"Accepted"} ]}).toArray(function(err,find_request){
    if(err){
      deferred.resolve(errors.senderror(416));
      return deferred.promise;
    }else{
      /*if(find_request.length==0){
        response = {response_status: "success", properties:[], in_completed_request_list:[]};
        deferred.resolve(response);
      }else{*/
       // console.log('find_request::::::'+JSON.stringify(find_request));
        var property_flat_array = _.map(find_request ,function (a){
          return  a.flat_id;
        });
        var property_id_array = _.map(find_request ,function (a){
          return  a.property_id;
        });
        var properties_json={};
       // console.log('property_flat_array---------->'+JSON.stringify(property_flat_array));
        //console.log('property_id_array---------->'+JSON.stringify(property_id_array));
        var unique_flat=_.uniq(property_flat_array);

        var req_not_rated_array_user = [];
        var req_not_rated_json_user;
       /* for(var i=0; i < unique_flat.length; i++){
          console.log(unique_flat[i])
          for(var j=0; j < find_request.length; j++){
            if(unique_flat[i]==find_request[j].flat_id){
              req_not_rated_json_user = {
                property_name: find_request[j].property_name,
                property_id: find_request[j].property_id,
                phase_name:find_request[j].phase_name ? "" : find_request[j].phase_name,
                tower_name:find_request[j].tower_name ? "" : find_request[j].tower_name,
                flat_id: find_request[j].flat_id,
                flat_name: find_request[j].flat_name,
              }
            }

          }
          req_not_rated_array_user.push(req_not_rated_json_user)
        }*/

        console.log('unique_flat++++++++++++>>>>>'+JSON.stringify(unique_flat))
        console.log('find_request++++++++++++>>>>>'+JSON.stringify(find_request))
      _.forEach(unique_flat, function(v1, i1) {
        console.log('v1>>>>>>'+v1)
        _.forEach(find_request, function(v2, i2) {
          console.log('v2========>>>'+v2.flat_id)
          if(v1==v2.flat_id){
            req_not_rated_json_user = {
              property_name: v2.property_name,
              property_id: v2.property_id,
              phase_name:v2.phase_name ? "" : v2.phase_name,
              tower_name:v2.tower_name ? "" : v2.tower_name,
              flat_id: v2.flat_id,
              flat_name: v2.flat_name,
            }
          }
        });
        req_not_rated_array_user.push(req_not_rated_json_user)
      });



        console.log(req_not_rated_array_user)
        var property_arr_data={};
        var req_not_rated_array_user_new = [];
        var req_not_rated_json_user_new;

        var data_wrt_flat_id= _.groupBy(find_request, function (item) { return item.flat_id});
        var data_wrt_property_id= _.groupBy(find_request, function (item) { return item.property_id});
     //   console.log('data_wrt_flat_id>>>>>>>>'+JSON.stringify(data_wrt_property_id))

        response = {response_status: "success",properties:req_not_rated_array_user, in_completed_request_list:data_wrt_flat_id};
        deferred.resolve(response);

     // }

    }

  });
  return deferred.promise;
}

/*************** Web-service for the resident_request_rating*********/

apiFunctions['resident_request_rating']=function (api_request,request_details) {
  console.log('------------>'+JSON.stringify(api_request))
  console.log('++++++++++++++++++++++>'+JSON.stringify(request_details))
  var deferred = Q.defer();
  var resident_id=request_details._id;
  var request_number=api_request.request_number;
  var rating=api_request.rating;
  if(resident_id && request_number){
      db.services_complaint.update({$and: [{resident_id: ObjectID(resident_id)}, {request_number: request_number}]}, {$set: {rating: rating}}, function (err, find_request) {
        if(err){
          deferred.resolve(errors.senderror(416));
          return deferred.promise;
        }else{
          console.log('find_request>>>>>>>'+JSON.stringify(find_request));
          response = {response_status: "success",rating:rating};
          deferred.resolve(response);
        }
      });
  }else{
    response = {response_status: "success",message:'both resident id and request number need to rate the request!!!'};
    deferred.resolve(response);
  }

  return deferred.promise;
}

apiFunctions['service_provider_acceptance_and_completion_sla_handling'] = function (api_request, request_details) {
  // console.log('<<<<<---------service_provider_acceptance_SLA----------->>>>>' + JSON.stringify(api_request))
  //console.log('request_details>>>>>>>' + JSON.stringify(request_details))
  var req_id = api_request.id;
  var service_provider_id = request_details._id;
  var status = api_request.status;
  var request_number = api_request.request_number;
  //console.log('service_provider_id>>>' + service_provider_id)
  var deferred = Q.defer();
  db.services_complaint.findOne({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, function (err, find_data) {
    if (err) {
      deferred.resolve(errors.senderror(416));
      return deferred.promise;
    } else {
      var acceptance_time = find_data.sla_time;
      var assigned_time = find_data.date_of_request_booked;
      var completed_time = find_data.completion_sla;
      console.log('assigned_time:::::' + assigned_time)
      var splitted_request_booked_time = _.split(assigned_time, "Z")[0];
      console.log('splitted_request_booked_time:::::' + splitted_request_booked_time)
      var final_accepted_time = moment(splitted_request_booked_time).add(parseFloat(acceptance_time), 'hours').format();
      var final_completed_time = moment(splitted_request_booked_time).add(parseFloat(completed_time), 'hours').format();
      console.log('final_accepted_time:::::' + final_accepted_time)
      console.log('final_completed_time:::::' + final_completed_time)
      var updated_status = 'Elapsed'

      if (find_data == null || find_data == '' || find_data == undefined) {
        response = {response_status: "success"};
        deferred.resolve(response);
      } else {
        // console.log('find_data', find_data.resident_id);
        // console.log('find_data' + JSON.stringify(find_data));
        db.user.findOne({_id: find_data.resident_id}, function (err, find_resident) {
          if (err) {
            deferred.resolve(errors.senderror(416));
            return deferred.promise;
          } else {
            if (find_resident == null || find_resident == '' || find_resident == undefined) {
              response = {response_status: "success"};
              deferred.resolve(response);
            } else {
              console.log(find_resident.device_token + 'find_resident>>>>' + JSON.stringify(find_resident))
              if (status == 'Accepted') {

                if (moment().format() > final_accepted_time) {
                  console.log('inside if:::: acceptance_SLA elapsed');
                  db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {acceptance_sla__status: updated_status}}, function (err, updated_data1) {
                    if (err) {
                      return err;
                    } else {
                      console.log('updated_data1>>>>' + JSON.stringify(updated_data1));
                      var email_to_be_forwarded = find_data.service_provider_email_id;
                      emailService.sendEmail(email_to_be_forwarded);
                      response = {
                        response_status: "success",
                        message: 'Your Message has been sent to this Email ID:' + ' ' + email_to_be_forwarded
                      };
                      deferred.resolve(response);
                    }
                  });
                } else {
                  console.log('inside if:::: acceptance_SLA still in progress')
                  db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {status: status}}, function (err, updated_data2) {
                    if (err) {
                      return err;
                    } else {
                      console.log('updated_data2' + updated_data2)
                      /*if(find_resident.device_token== undefined || find_resident.device_token==null || find_resident.device_token==''){
                        deferred.resolve(errors.senderror(456));
                        return deferred.promise;
                      }else{

                        var data = {
                          device_id: find_resident.device_token,
                          data: {
                            "notification_type": "1",
                            "title": "Request Accepted",
                            "message": "Your request is accepted by the service-provider",
                            "click_action": "ACTION_RESIDENT"
                          },
                          notify_data: {
                            title: "Request Accepted",
                            body: "Your request is accepted by the service-provider",
                            click_action: "ACTION_RESIDENT",
                            tag: "alert"
                          }
                        }

                        pushNotificationService.sendNotification(data).then(function (result) {
                          console.log(result);
                          response = {response_status: "success"};
                          deferred.resolve(response);
                        });
                      }*/
                      response = {response_status: "success"};
                      deferred.resolve(response);
                    }
                  });
                }


              }
              else if (status == 'Completed') {
                console.log('inside completed');
                if (moment().format() > final_completed_time) {
                  console.log('inside if:::::completion SLA Elapsed::::::')
                  db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {completion_sla__status: updated_status}}, function (err, updated_data1) {
                    if (err) {
                      return err;
                    } else {
                      console.log('updated_data1>>>>' + JSON.stringify(updated_data1));
                      var email_to_be_forwarded = find_data.service_provider_email_id;
                      emailService.sendEmail(email_to_be_forwarded);
                      response = {
                        response_status: "success",
                        message: 'Your Message has been sent to this Email ID:' + ' ' + email_to_be_forwarded
                      };
                      deferred.resolve(response);
                    }
                  });
                } else {
                  console.log('inside else if:::::completion SLA still in progress!!!!::::::')
                  db.services_complaint.update({$and: [{service_provider_id: ObjectID(service_provider_id)}, {request_number: request_number}]}, {$set: {status: status}}, function (err, updated_data3) {
                    if (err) {
                      return err;
                    } else {
                      console.log('updated_data2' + updated_data3)
                      /*if(find_resident.device_token== undefined || find_resident.device_token==null || find_resident.device_token==''){
                        deferred.resolve(errors.senderror(456));
                        return deferred.promise;
                      }else{

                        var data = {
                          device_id: find_resident.device_token,
                          data: {
                            "notification_type": "1",
                            "title": "Request Accepted",
                            "message": "Your request is accepted by the service-provider",
                            "click_action": "ACTION_RESIDENT"
                          },
                          notify_data: {
                            title: "Request Accepted",
                            body: "Your request is accepted by the service-provider",
                            click_action: "ACTION_RESIDENT",
                            tag: "alert"
                          }
                        }

                        pushNotificationService.sendNotification(data).then(function (result) {
                          console.log(result);
                          response = {response_status: "success"};
                          deferred.resolve(response);
                        });
                      }*/
                      response = {response_status: "success"};
                      deferred.resolve(response);
                    }
                  });
                }


              }
              else {
                response = {response_status: "success", message: 'Your task is' + ' ' + status};
                deferred.resolve(response);
              }
            }


          }
        });
      }


    }
  });
  return deferred.promise;
}
module.exports = router;
