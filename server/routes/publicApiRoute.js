// Import main Configuration file
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var crypto = require('crypto');
//var key = config.password_encryption_key;
//var iv = config.password_encryption_iv;
var Q = require('q');
var async = require('async');
const fs = require('fs'),
  request = require('request');
var mongoose = require('mongoose');
//var deleteKey = require('key-del');
var mongojs = require('mongojs');
var config = require('../../config/main.json');
var mongo = require('mongodb').MongoClient;
var db = mongojs(config.connectionString);
//var db=MongoClient.connect(config.connectionString);
var path = require('path');
var _ = require('lodash');
var cloudinary = require('cloudinary');
var multer = require('multer');
var User = require('../model/user');
//var db = mongojs('mongodb://localhost:27017/t3h', ['data']);
var jsonfile = require('jsonfile')
const accountSid = 'ACa0f88cfda5af6f8d596058afecccba33';
const authToken = '261ba34e95634f7ee58dcc5be021a530';
const client = require('twilio')(accountSid, authToken);

// Import Common Services
var test_request = require("../../config/test_userAPI.js");
var emailService = require('../../services/email.service');
var errors = require('../../services/error');
var validation = require('../../services/validations');
var smsService = require('../../services/sms.service');
var passwordService = require('../../services/password.service.js');
var pushNotificationService =  require('../../services/push.notifications.js');
//var commanFunctions = require('../routes/commanRoute.js');

// Import Models
//var UserModel = require('./../models/userModel.js');
//var GlobalModel = require('./../models/globalModel.js');



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
  console.log(api_request)

  if (!api_request.request_from || api_request.request_from != "web" )
  {
    if(validation.check(api_request.access_token,'required') == 0 )
    {
      deferred.resolve( errors.senderror(422,"Access token"));
      return deferred.promise;
    }
  }
  if(api_request.request_from != "web" && api_request.access_token != config.public_access_token)
    deferred.resolve(errors.senderror(416));
  else
    deferred.resolve(res);


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

/********************************************************************
 IMPLEMENTING FUNCTIONS...
 ********************************************************************/



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

/*******************************************************************
 User_Login Web Service
*******************************************************************/
apiFunctions['user_login'] = function (api_request) {
  var deferred = Q.defer();

  if (validation.check(api_request.phone_number, 'required') == 0) {
    deferred.resolve(errors.senderror(422, "Phone Number"));
    return deferred.promise;
  }
  var phone_number = api_request.phone_number;
  console.log('welcome' + phone_number);
  var from_number = '+13012983351';
  var to_number = '+91'+phone_number;
  if (api_request.otp == undefined || api_request.otp == null || api_request.otp == '') {
    db.user.find({'phone_number': phone_number}).toArray(function (err, user_details) {
      console.log()
      if (err) {
        deferred.resolve(errors.senderror(416));
        return deferred.promise;
      }
      else {
        if (user_details == '' || user_details == undefined || user_details == null) {
          deferred.resolve(errors.senderror(451, "This Phone number is not registered."));
        } else {
          var generated_otp = Math.floor(1000 + Math.random() * 9000);
          var set_param = {
            otp: generated_otp
          };
          db.user.update({'phone_number': phone_number}, {$set: set_param}, function (error, result) {
            if (error) {
              deferred.resolve(errors.senderror(416));
              return deferred.promise;
            } else {
              /*return client.messages
                .create({
                  body: 'Welcome to hubcontrol.Your OTP verification code is' + ' ' + generated_otp,
                  to: to_number,
                  from: from_number,
                }).then(function (data) {
                  response = {response_status: "success", message: "OTP Sent Successfully"};
                  deferred.resolve(response);
                }).catch(function (err) {
                  console.error(err);
                });*/
              var msg91 = require("msg91")("187077AMdvC2G3S15a28d4a8", "HUBCON", "4");
              // Mobile No can be a single number, list or csv string
              //  var mobileNo = [ "+91" +"9880023943", "+91" +"7709104334", "+91" +"8917288305" ];

              //var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";
              var mobileNo = '+91' + phone_number;
              msg91.send(mobileNo, 'Welcome to hubcontrol.Your OTP is:' + generated_otp, function (err, response) {
                if (err) {
                  return res.json({save: false, message: 'error in sending OTP'});
                } else {
                  response = {response_status: "success", message: "OTP Sent Successfully"};
                  deferred.resolve(response);
                }
              });
            }
          });
        }
      }
    })
  } else if (api_request.otp != undefined) {
    var entered_otp = api_request.otp;
    var phone_number = api_request.phone_number;
    var parsed_otp = parseInt(entered_otp);
    var token = Math.floor((Math.random() * 10000000000) + 1);
    var user_type;
    db.user.find({'phone_number': phone_number}).toArray(function (err, user_details) {
      if (err) {
        return err;
      } else {
        if (parsed_otp == user_details[0].otp) {
          var set_param = {
            access_token: token.toString(),
            device_token:api_request.device_token== undefined ? "" :api_request.device_token
          };
          db.user.update({'phone_number': phone_number}, {$set: set_param}, function (error, result) {
              if(error){
                deferred.resolve(errors.senderror(401));
                return deferred.promise;
              }else{
                if(user_details[0].user_type=="Resident"){
                   user_type=1;
                }else if(user_details[0].user_type=="Service-Provider"){
                   user_type=2;
                }
                response = {
                    response_status: "success",
                    message: "OTP Verification Successful",
                    access_token:token.toString(),
                    user_details:{
                      user_id:user_details[0]._id,
                      first_name:user_details[0].first_name,
                      last_name:user_details[0].last_name,
                      user_type:user_type
                    }
                };
                deferred.resolve(response)
              }
          });

        } else {
          deferred.resolve(errors.senderror(415, 'OTP'));
        }
      }
    });
  }
  return deferred.promise;
}




/*******************************************************/
module.exports = router;

