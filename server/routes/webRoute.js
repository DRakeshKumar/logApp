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
var json2xls = require('json2xls');
const mongoose = require('mongoose');
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
const async=require('async');
// Connect
var cloudinary = require('cloudinary');

// Import Common Services
var test_request = require("../../config/test_userAPI.js");
var emailService = require('../../services/email.service');
var errors = require('../../services/error');
var validation = require('../../services/validations');
var smsService = require('../../services/sms.service');
var passwordService = require('../../services/password.service.js');
var pushNotificationService =  require('../../services/push.notifications.js');
/*----------------------------------------------------------------------*/

router.get('/verifyUsersProcess/:phone_number', function (req, res) {
  var phone = req.params.phone_number;
  console.log('welcome' + phone);
  var from_number = '+13012983351';
  var to_number = '+918917288305';
  db.t_company_owner.find({'movers_mobile': phone}).toArray(function (err, fetch_users_Data) {
    if (err) {
      return err;
    }
    else {
      if (fetch_users_Data == undefined || fetch_users_Data == '' || fetch_users_Data == null) {
        console.log('inside second else  if' + JSON.stringify(fetch_users_Data))
        return res.json({save: false, message: 'Phone number is not registered!!!'});
      } else {
        // console.log(JSON.stringify(fetch_users_Data));
        var generated_otp = Math.floor(1000 + Math.random() * 9000);
        var set_param = {
          otp: generated_otp
        };
        db.t_company_owner.update({'movers_mobile': phone}, {$set: {otp: generated_otp}}, function (error, result) {
          if (error) {
            return res.json({save: false, message: 'error in updation of data'});
          } else {
            /*-------------------------------------*/
           /*var msg91 = require("msg91")("187077AMdvC2G3S15a28d4a8", "HUBCON", "4");
            // Mobile No can be a single number, list or csv string
          //  var mobileNo = [ "+91" +"9880023943", "+91" +"7709104334", "+91" +"8917288305" ];

            //var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";
            var mobileNo = '+91' + phone;
            msg91.send(mobileNo, generated_otp + ' ' +'is your OTP.Welcome to MovEasy!' , function (err, response) {
              if (err) {
                return res.json({save: false, message: 'error in sending OTP'});
              } else {
                console.log(mobileNo + 'otp sent:::::::::::::::' + response);
                return res.json({save: true, message: 'OTP Sent'});
              }
            });*/
            /*-------------------------------------*/
          }
        });
      }
      // }

    }
  })

});
router.get('/verifyOtpProcess/', function (req, res) {
  var entered_otp = req.query.otp;
  var phone_number = req.query.phone;
  console.log('total::::' + JSON.stringify(phone_number));
  console.log('entered_otp:::' + JSON.stringify(req.query));
  var parsed_otp = parseInt(entered_otp)
  db.t_company_owner.findOne({'movers_mobile': phone_number}, function (err, fetch_otp_data) {
    if (err) {
      return err;
    } else {
      /*---------------------------------------------*/
      if (parsed_otp == fetch_otp_data.otp) {
        //req.session.user=fetch_otp_data.first_name;
        req.session.user=fetch_otp_data._id;
        console.log(req.session.user)
        var user_session = {
          username   : fetch_otp_data.movers_first_name,
        };
        console.log(user_session)
        var jwt    = require('jsonwebtoken');
        var token  = jwt.sign(user_session, 'hubcontrol321', {
          expiresIn: '2h' // expires in 3 hours
        });
        // console.log(token)
        return res.json({save: true,token:token, message: 'successfully Login!!!'})
      } else {
        return res.json({save: false, message: 'OTP does not match!!!'})
      }
      /*---------------------------------------------*/
      /*if(!(fetch_otp_data.user_type=='Service-Provider' && fetch_otp_data.is_manager=='Yes')){
         return res.json({save: false, message: "Sorry! You don't have access"})
      }else{
        if (parsed_otp == fetch_otp_data.otp) {
          req.session.user=fetch_otp_data._id;
          console.log(req.session.user)
          var user_session = {
            username   : fetch_otp_data.first_name,
          };
          console.log(user_session)
          var jwt    = require('jsonwebtoken');
          var token  = jwt.sign(user_session, 'hubcontrol321', {
            expiresIn: '2h' // expires in 3 hours
          });
          // console.log(token)
          return res.json({save: true,token:token, message: 'successfully Login!!!'})
        } else {
           return res.json({save: false, message: 'OTP does not match!!!'})
        }
      }*/
    }
  });


});
router.get('/users', function(req,res){
  db.user.find({}).toArray(function (err, users_Data) {
    if(err){
      return err;
    }else{
      return res.json(users_Data)
    }
  });
});
router.get('/showIndividualServiceProcess', function(req,res){
  db.services.findOne({}, {'daily_service_info': true},function (err, users_Data) {
    if(err){
      return err;
    }else{
      //  console.log('-------'+JSON.stringify(users_Data))
      return res.json(users_Data)
    }
  });
});
router.get('/showloggedRequestUsers',function(req,res){
  db.services_complaint.find({service_provider_id:ObjectID(req.session.user)}).toArray(function (err, logged_request_Data) {
    if(err){
      return err;
    }else{
     // console.log('session name::::'+JSON.stringify(logged_request_Data))
      return res.json(logged_request_Data)
    }
  });
});
router.get('/showEnquiredUsers',function(req,res){
  db.t_user.find().toArray(function (err, logged_request_Data) {
    if(err){
      return err;
    }else{
      // console.log('session name::::'+JSON.stringify(logged_request_Data))
      return res.json(logged_request_Data)
    }
  });
});
router.get('/showCompanyOwnerListProcess',function(req,res){
  db.t_company_owner.find().toArray(function (err, owner_Data) {
    if(err){
      return err;
    }else{
      // console.log('session name::::'+JSON.stringify(logged_request_Data))
      return res.json(owner_Data)
    }
  });
});
router.get('/showUserNameSessionWise',function(req,res){
  db.t_company_owner.find({_id:ObjectID(req.session.user)}).toArray(function (err, user_name) {
    if(err){
      return err;
    }else{
          return res.json({user_name:user_name})

      }
  });
});
router.put('/showAllRequestTypesForSpecificService', function(req,res){
  var all_data=req.body;
  console.log('=======>'+JSON.stringify(all_data))
  db.user.find({request_types:new RegExp(all_data.request_id)}).toArray(function (err, users_Data) {
    if(err){
      return err;
    }else{
      return res.json(users_Data)
    }
  });
});
router.put('/updateServiceProvider', function(req,res) {
  var updateItem = req.body;
  console.log('updateServiceProvider================>>>>>' + JSON.stringify(updateItem))
  var service_provider_id=req.body.sp_name[0]._id;
  var service_provider_name=req.body.service_provider_name;
  var service_provider_phone_number=req.body.service_provider_phone_number;
  console.log(ObjectID(service_provider_id)+'sp_id::::::::::::::'+ req.body.sp_name[0]._id)
  db.services_complaint.update({service_provider_id: ObjectID(service_provider_id), request_number: req.body.request_number}, {$set: {service_provider_id: ObjectID(service_provider_id),service_provider_name:service_provider_name,service_provider_phone_number:service_provider_phone_number}}, function(error, success) {
    if (error) {
      console.log('error::::'+error)
      throw error
    }else{
      console.log(JSON.stringify(success))
      return  res.json({save:true, message: 'Success'})
    }
  })

});
router.put('/sendQuoteToUsersProcess', function(req,res) {
  var updateItem = req.body;
  console.log('updateServiceProvider================>>>>>' + JSON.stringify(updateItem))
  var to_number=req.body.to_number;
  var list_items=req.body.list_item_details;
  var logistic_details=req.body.logistic_details;
  var msg91 = require("msg91")("187077AMdvC2G3S15a28d4a8", "HUBCON", "4");
            // Mobile No can be a single number, list or csv string
          //  var mobileNo = [ "+91" +"9880023943", "+91" +"7709104334", "+91" +"8917288305" ];

            //var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";
            var mobileNo = '+91' + to_number;
            msg91.send(mobileNo, list_items +","+ logistic_details, function (err, response) {
              if (err) {
                return res.json({save: false, message: 'error in sending Quoation.'});
              } else {
                console.log(mobileNo + 'otp sent:::::::::::::::' + response);
                return res.json({save: true, message: 'Quotation Sent successfully!!!'});
              }
            });

});
router.put('/updateUser', function(req,res) {
  var updateItem = req.body;
  console.log('================>>>>>' + JSON.stringify(updateItem))
  var id = req.body._id;
  var service_name = req.body.service_name;
  var service_name_id =  req.body.service_name_id;
 // findOneAndUpdate({ _id: "537c09b12aaf20a323000027", "edges._id": "53ead16bfbf79589a4000030" }, { $set: { 'edges.$.status': 0 } });
  db.services.update({_id: ObjectID(id), "daily_service_info._id": ObjectID(service_name_id)}, {$set: {"daily_service_info.$.service_name": req.body.service_name}},{upsert: true, 'new': true}, function(error, success) {
    if (error) {
      throw error
    }else{
      console.log(JSON.stringify(success))
     return  res.json({save:true, message: 'Success'})
    }
  })
});
router.get('/findFirstLevelOfDs/:type_name', function(req,res){
  var type_name = req.params.type_name;
  console.log('--------'+type_name)
 // db.services.find({ $and: [{"service_type":"Daily Services"},{"service_type":"Daily Services"}, { "service_name":"Milk" }]}).toArray(function (err, users_Data) {
  //db.services.find({daily_service_info: {$elemMatch: {service_type:type_name, level:'1'}}}).toArray(function (err, users_Data) {
  db.services.find({"service_id" : "SR-1"}, {'daily_service_info': true},function (err, users_Data) {
    if(err){
      return err;
    }else{
      var level_1=[];
      for(var i=0; i < users_Data[0].daily_service_info.length; i++){
        if(type_name ==users_Data[0].daily_service_info[i].service_type && users_Data[0].daily_service_info[i].level=='1' ){
          var level1_json={
            service_name:users_Data[0].daily_service_info[i].service_name,
            level_id:users_Data[0].daily_service_info[i].level_id
          };
          level_1.push(level1_json)
        }
      }
      console.log(JSON.stringify(level_1))
    //  console.log(JSON.stringify(users_Data))
      return res.json(level_1)
    }
  });
});
router.get('/findSecondLevelOfDs/:level1', function(req,res){
  var level1 = req.params.level1;
  console.log('--------'+JSON.stringify(level1))
  // db.services.find({ $and: [{"service_type":"Daily Services"},{"service_type":"Daily Services"}, { "service_name":"Milk" }]}).toArray(function (err, users_Data) {
  //db.services.find({daily_service_info: {$elemMatch: {service_type:type_name, level:'1'}}}).toArray(function (err, users_Data) {
  db.services.find({"service_id" : "SR-1"}, {'daily_service_info': true},function (err, users_Data) {
    if(err){
      return err;
    }else{
  //    console.log(JSON.stringify(users_Data))
      var level_2=[];
      for(var i=0; i < users_Data[0].daily_service_info.length; i++){
        if(users_Data[0].daily_service_info[i].parent_id==level1 && users_Data[0].daily_service_info[i].level=="2" ){
          console.log('--------------inside if')
          var level2_json={
            service_name:users_Data[0].daily_service_info[i].service_name,
            level_id:users_Data[0].daily_service_info[i].level_id
          };
          level_2.push(level2_json)
        }
      }
      console.log(JSON.stringify(level_2))
      //  console.log(JSON.stringify(users_Data))
      return res.json(level_2)
    }
  });
});
router.get('/findThirdLevelOfDs/:level3', function(req,res){
  var level3 = req.params.level3;
  console.log('--------'+JSON.stringify(level3))
  // db.services.find({ $and: [{"service_type":"Daily Services"},{"service_type":"Daily Services"}, { "service_name":"Milk" }]}).toArray(function (err, users_Data) {
  //db.services.find({daily_service_info: {$elemMatch: {service_type:type_name, level:'1'}}}).toArray(function (err, users_Data) {
  db.services.find({"service_id" : "SR-1"}, {'daily_service_info': true},function (err, users_Data) {
    if(err){
      return err;
    }else{
  //    console.log(JSON.stringify(users_Data))
      var level_3=[];
      for(var i=0; i < users_Data[0].daily_service_info.length; i++){
        if(users_Data[0].daily_service_info[i].parent_id==level3 && users_Data[0].daily_service_info[i].level=="3" ){
          console.log('--------------inside if')
          var level3_json={
            service_name:users_Data[0].daily_service_info[i].service_name,
            level_id:users_Data[0].daily_service_info[i].level_id
          };
          level_3.push(level3_json)
        }
      }
      console.log(JSON.stringify(level_3))
      //  console.log(JSON.stringify(users_Data))
      return res.json(level_3)
    }
  });
});
router.use(json2xls.middleware);
router.get('/downloadExcelProcess/:selected_value', function(req,res){
  console.log('------------------------>'+JSON.stringify(req.params.selected_value))
  var selected_data=req.params.selected_value;
  if(selected_data=='Resident'){
    console.log('Resident')
    if(req.session.user== undefined){
      return res.json({save:'NO',message:'Your session is out, please do the login again.'})
    }else{
      db.property.findOne({"user_id":req.session.user},function (err, data) {
        if(err){
          return err;
        }else{
          console.log('data...............'+JSON.stringify(data))
          if(data== null  || data== undefined || data==''){
            return res.json({save:'NO',message:'Your session is out.Please do the login again'})
          }else{
            db.user.find({$and: [{"property_id":data.property_id},{user_type:selected_data}]}).toArray(function (err, users_Data) {
              if(err){
                return err;
              }else{
                if(users_Data.length==0){
                  console.log(users_Data.length+'@@@@@@@@'+JSON.stringify(users_Data))
                  return res.json({save:false})
                }else{
                  return res.json({users_Data:users_Data, flag:1})
                }
              }
            });
          }
        }
      });
    }
  }
  else if(selected_data=='Service-Provider'){
    console.log('Service-Provder'+selected_data);
    if(req.session.user== undefined){
      return res.json({save:'NO',message:'Your session is out, please do the login again.'})
    }else{
      db.property.findOne({"user_id":req.session.user},function (err, data) {
        if(err){
          return err;
        }else{
          console.log('data.^^^^^^^^^^^^^^^^^'+JSON.stringify(data))
          if(data== null  || data== undefined || data==''){
            return res.json({save:'NO',message:'Your session is out.Please do the login again'})
          }else{
            db.user.find({$and: [{"property_id":data.property_id},{user_type:selected_data}]}).toArray(function (err, users_Data) {
              if(err){
                return err;
              }else{
                if(users_Data.length==0){
                  console.log(users_Data.length+'@@@@@@@@'+JSON.stringify(users_Data))
                  return res.json({save:false})
                }else{
                  console.log(users_Data.length+'!!!!!!!!!!!!!!'+JSON.stringify(users_Data))
                  return res.json({users_Data:users_Data, flag:2})
                }
                // var ws = XLSX.utils.json_to_sheet(users_Data);
              }
            });
          }

        }
      });
    }
  }
  else if(selected_data=='services'){
    console.log('services'+req.session.user)
    if(req.session.user== undefined){
      return res.json({save:'NO',message:'Your session is out, please do the login again.'})
    }else{
      db.services.find({user_id:req.session.user}).toArray(function (err, users_Data) {
        if(err){
          return err;
        }else{
          console.log('users_Data>>>>>>>>>'+users_Data)
          if(users_Data.length==0){
            return res.json({save:false})
          }else{
            // var ws = XLSX.utils.json_to_sheet(users_Data);
            return res.json({users_Data:users_Data, flag:3})
          }

        }
      });
    }

  }
  else if(selected_data=='property'){
    console.log('property'+req.session.user)
    if(req.session.user== undefined){
      return res.json({save:'NO',message:'Your session is out, please do the login again.'})
    }else{
      db.property.find({user_id:req.session.user}).toArray(function (err, users_Data) {
        if(err){
          return err;
        }else{
          if(!(_.includes(JSON.stringify(users_Data), 'flat'))){
            console.log(users_Data.length+'@@@@@@@@'+JSON.stringify(users_Data))
            return res.json({save:false})
          }else{
            console.log('cool------------>>>')
            // var ws = XLSX.utils.json_to_sheet(users_Data);
            console.log(users_Data.length+'#############'+JSON.stringify(users_Data))
            return res.json({users_Data:users_Data, flag:4})
          }

        }
      });
    }
  }
});
router.get('/sendSmsUsingMsg91', function (req, res) {
  console.log('server***************');
  var msg91 = require("msg91")("184742A0oHVQcx5yWR5a13fe36", "Arkenea", "4");
// Mobile No can be a single number, list or csv string
  var mobileNo = "8917288305";
  var generated_otp = Math.floor(1000 + Math.random() * 9000);
  // var mobileNo = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];
  // var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";
  msg91.send(mobileNo, generated_otp, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('otp sent:::::::::::::::' + response);
    }


  });
})
router.get('/sendSmsUsingtextLocal', function (req, res) {
  var validOptions = {apikey: '4lqruA8EC9k-WRMlgcRWsNZcuOHIZafbnjqE5ussRA'};
//  var validOptions = { username: 'npm@block17.co.uk', password: 'mypassword' };
  // var validOptions = { username: 'npm@block17.co.uk', hash: 'myhash1234567890' };
  var generated_otp = Math.floor(1000 + Math.random() * 9000);
  var tl = require('textlocal')(validOptions);
  tl.sendSMS('8917288305', generated_otp, 'Arkenea', function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log('message sent:::' + data)
    }
  });
})
router.put('/movers_enquiry_data_verificationProcess', function (req, res) {
  console.log(JSON.stringify(req.body));
  var aadhar=req.body.movers_aadhar;
  var validator = require('aadhaar-validator')
  var aadhar_result=validator.isValidNumber(aadhar)
  db.t_company_owner.find({movers_mobile:req.body.movers_mobile,movers_aadhar:req.body.movers_aadhar},function(err, find_company){
    if(err){
      return err;
    } else{
      if(find_company.length > 0){
        res.json({save:false,message:'You have already registered with us'})
      }else{
        if(aadhar_result==true){
          db.t_company_owner.save(req.body, function (err,result) {
            if(err){
              return err;
            }else{
              res.json({save:true, message:'Data Saved!!!'})
            }
          });
        }else{
          res.json({save:false,message:'Your Aadhar Number is not valid'})
        }
      }
    }
  })


});
router.put('/movers_enquiry_data_aadhar_validate_verification', function (req, res) {
  console.log(JSON.stringify(req.body));
  var aadhar=req.body.movers_aadhar;
  var validator = require('aadhaar-validator')
  var aadhar_result=validator.isValidNumber(aadhar);
  if(aadhar_result==true){
    console.log('cool')
  }else{
    res.json({save:false,message:'Your Aadhar Number is not valid'})
  }


});
router.put('/user_enquiry_process', function (req, res) {
  console.log(JSON.stringify(req.body));
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!

  var yyyy = today.getFullYear();
  if(dd<10){
    dd='0'+dd;
  }
  if(mm<10){
    mm='0'+mm;
  }
  var today = yyyy+'-'+mm+'-'+dd;
  var data={
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    email:req.body.email,
    mobile:req.body.mobile,
    from_name:req.body.from_name,
    to_name:req.body.to_name,
    pick_up_date:req.body.pick_up_date,
    list_item:req.body.list_item,
    created_date:today,

  }
  db.t_user.find({email:req.body.email,mobile:req.body.mobile},function(err, find_user){
    if(err){
      return err;
    } else{
      if(find_user.length > 0){
        res.json({save:false,message:'You have already registered with us'})
      }else{
          db.t_user.save(data, function (err,result) {
            if(err){
              return err;
            }else{
              res.json({save:true, message:'Data Saved!!!'})
            }
          });

      }
    }
  })


});
router.get('/userDateWiseProcess/:date', function (req, res) {
  var date = req.params.date;
  console.log('welcome' + date);
  db.t_user.find({created_date:date},function (err, date_wise_data) {
    if(err){
      return err;
    }else{
       console.log('date_wise_data name::::'+JSON.stringify(date_wise_data))
      return res.json(date_wise_data)
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
