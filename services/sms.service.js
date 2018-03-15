/*
www.twilio.com
User name : pratik@arkenea.com
Pass : Arkenea@123
*/

var TWILIO_ACCOUNT_SID= "ACafc229cdf4c908ebf8c110a0e8e58c7f";
var TWILIO_API_KEY= "57992c42b3b37d4c929e7081d40e1e3e";
var TWILIO_IPM_SERVICE_SID= "SKcf1b5a9142de0dd510f7614c723dcd33";
var TWILIO_API_SECRET= "EDNps5erfFB5rqq6dOTEIbtLmsBSdYxc";
var twilio_from_number = '+14088053732';
var client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_API_KEY);

client.sendSms = function(to, message) {
  client.messages.create({
    body: message,
    to: to,
    from: twilio_from_number
  }, function(err, data) {
    if (err) {
      console.error('Message not sent.');
      console.error(err);
    }
	else {
      console.log('SMS has been sent to '+to);
    }
  });
};
module.exports =client;
