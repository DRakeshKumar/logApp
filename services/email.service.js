var service = {};
var Q = require('q');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('./../config/main.json');
var supportMail="fhir360@gmail.com";
var supportPass="Bestray11#";
service.sendEmail = sendemail;

var response={};
module.exports = service;
// function to send mail using SMTP
function sendemail(email_id)
{
  var deferred = Q.defer();
  console.log('email_id>>>>>>>>>>'+email_id)
        var transporter = nodemailer.createTransport(smtpTransport({
          service: 'Gmail',
          host: 'smtp.gmail.com',
          secure: false, // use SSL
          auth: {
            user: supportMail,
            pass: supportPass
          },
          tls: {
            rejectUnauthorized: false
          }
        }));
      error = "error";
      var mailOptions = {
        from: supportMail, // sender address
        to: email_id, // list of receivers
        subject: 'Welcome to HubControl', // Subject line
        //text: 'Hello world' // plaintext body
        html: 'Welcome to HubControl. Your request has been elapsed for.<br/><br/>'
      };
      transporter.sendMail(mailOptions, function(error, responseStatus) {
            if(error){
             console.log('error>>>>>>'+error)
            }else{
              console.log('success::::::::message sent'+responseStatus)
              response = {response_status: "success",message:'Your Message has been sent to this Email ID:'+' '+email_id};
              deferred.resolve(response);
            }

          });

  return deferred.promise;

}
