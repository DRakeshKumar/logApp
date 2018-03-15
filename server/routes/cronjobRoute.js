const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
var mongojs = require('mongojs');
//var mongojs = require('mongojs');
var config = require('../../config/main.json');
var db = mongojs(config.connectionString);
var Q = require('q');
//var db = mongojs('mongodb://localhost:27017/mean', ['data']);
var _ = require('lodash');
var Promise = require('promise');
var q = require('q');
var async=require('async');
var cron = require('node-cron');
// Connect
var cloudinary = require('cloudinary');
var msg91 = require("msg91")("187077AMdvC2G3S15a28d4a8", "HUBCON", "4");
// Import Common Services
var test_request = require("../../config/test_userAPI.js");
var emailService = require('../../services/email.service');
var errors = require('../../services/error');
var validation = require('../../services/validations');
var smsService = require('../../services/sms.service');
var passwordService = require('../../services/password.service.js');
var pushNotificationService =  require('../../services/push.notifications.js');
/*----------------------------------------------------------------------*/

//function to send the sms to the  new resident who is uploaded  through excel sheet but not yet registered in App.
//need to take another parameter for the resident_register=Yes/No.

router.get('/notifying_residents_on_registration', function (req,res) {
  console.log('*******notifying_residents_on_registration*******');
  var property_name;
  db.user.find({user_type:'Resident',register:"No"},function (err,users) {
    if(err){
      return err;
    }else{
      async.eachSeries(users,function(user_details,callback_one){
        console.log('user_details:::::::::'+JSON.stringify(user_details));
        db.property.find({property_id:user_details.property_id},function (err,property_details) {
         if(err){
           return err;
         }else{
           async.each(property_details,function(property_list,callback_two){
              console.log('property_details:::::::::'+JSON.stringify(property_list.property_id));
              property_name=property_list.property_name;
              callback_two();
           },function callback_two(err){
             var mobileNo = '+91' + user_details.phone_number;
             var bodyMessage='You have not yet signed into hubcontrol for '+property_name+'. Please click on the link below so that we can deliver a harmonious living experience to your doorstep - '+property_name+''
             msg91.send(mobileNo, bodyMessage , function (err, response) {
               if (err) {
                 return res.json({save: false, message: 'error in sending OTP'});
               } else {
                 console.log(mobileNo + 'otp sent:::::::::::::::' + response);
                 callback_one();

               }
             });
           });
         }
        });
      },function callback_one(err) {
        res.send("Success ");
      });
    }
  });
});

//function to send the sms to the resident who is still not registered and system will send them sms on every sunday at 10.30 A.M Morning.
router.get('/reminder_for_not_registered_users', function(req,res){
  console.log('*******reminder_for_not_registered_users*******');
  db.user.find({user_type:'Resident',register:"No"},function (err,users) {
    if(err){
      return err;
    }else{
      async.eachSeries(users,function(user_details,callback_one){
        console.log('user_details:::::::::'+JSON.stringify(user_details));
        db.property.find({property_id:user_details.property_id},function (err,property_details) {
          if(err){
            return err;
          }else{
            async.each(property_details,function(property_details,callback_two){
              console.log('property_details:::::::::'+JSON.stringify(property_details));
              callback_two();
            },function callback_two(err){
              var mobileNo = '+91' + user_details.phone_number;
              var property_name=property_details.property_name;
              var bodyMessage='You have not yet signed into hubcontrol for '+property_name+'. Please click on the link below so that we can deliver a harmonious living experience to your doorstep - '+property_name+''
              msg91.send(mobileNo, bodyMessage , function (err, response) {
                if (err) {
                  return res.json({save: false, message: 'error in sending OTP'});
                } else {
                  console.log(mobileNo + 'otp sent:::::::::::::::' + response);
                  callback_one();

                }
              });
            });
          }
        });
      },function callback_one(err) {
        res.send("Success ");
      });
    }
  });
});






/*-------------------------------------------------------------*/
var response={};
// Constant veriable declearations
var apiFunctions = [];
var User_ImageUrl=(config.cloudinary_set=='Y')?config.cloudinary_url:config.image_url;
cloudinary.config({ cloud_name: config.cloudinary_cloud_name,  api_key: config.cloudinary_api_key, api_secret: config.cloudinary_api_secret });

/**********************************   Image Upload functionality ********************************************************************/



module.exports = router;
