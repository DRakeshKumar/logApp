var service = {};
var Q = require('q');
service.senderror = senderror;
module.exports = service;

function senderror(error_code,field)
{
  if(field == undefined)
    field = "";

  var errorMsg = [];

  errorMsg[400] = "Bad request";
  errorMsg[401] = "Authentication Failed";
  errorMsg[403] = "Forbidden";
  errorMsg[404] = field+" not found";
  errorMsg[405] = "You are not allowed to do this activity.";
  errorMsg[415] = "Invalid "+field+". Please enter valid "+field+".";
  errorMsg[416] = "Record not match";
  errorMsg[422] = field+" is required";
  errorMsg[423] = "Your Account has been blocked. Please contact the admin to unblock your account.";
  errorMsg[451] = field;
  errorMsg[452] = "Phone Number & OTP does not match.";
  errorMsg[453] = "New OTP & Confirm OTP does not match.";
  errorMsg[455] = "You already have an OR Admin for selected specilty. Do you want to replace with new user?";
  errorMsg[456] = "No device token found";
  errorMsg[457] = "No request number found";



  errorMsg[500] = "Internal Server Error";
  errorMsg[501] = "Not Implemented";
  errorMsg[503] = "Service Unavailable";
  errorMsg[505] = "HTTP Version Not Supported";


  var deferred = Q.defer();

  deferred.resolve({"response_status": "failure","error_code":error_code,"message":errorMsg[error_code]});


  return deferred.promise;

}
