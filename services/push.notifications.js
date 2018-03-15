var config = require("../config/main.json");
var service = {};
var Q = require('q');
var FCM = require('fcm-push');

var serverKey = config.hubcontrolgcmKey;
var fcm = new FCM(serverKey);

function sendNotification(data)
{
  var deferred = Q.defer();

  var message = {
    to: data.device_id, // required fill with device token or topics
    collapse_key: 'alert',
    notification: data.notify_data,
    data: data.data
  };

  console.log(message);
  //promise style
  fcm.send(message)
    .then(function(response){
      console.log("Successfully sent with response: ", response);
      deferred.resolve(response);
    })
    .catch(function(err){
      console.log("Something has gone wrong!");
      console.log(err);
      console.error(err);
      deferred.resolve(err);
    })
  return deferred.promise;
}
/*var userGcmKey = config.instagcmKey;




function sendNotification(data)
{
console.log("FCM KEY :"+config.instagcmKey)
 var settings = {
   gcm: {
  id: config.instagcmKey, // PUT YOUR GCM SERVER API KEY,
  msgcnt: 0,
  dataDefaults: {
    delayWhileIdle: false,
    timeToLive: 4 * 7 * 24 * 3600, // 4 weeks
    retries: 4,
  },
  options: {},
   },
   apn: {
  gateway: 'gateway.push.apple.com',
  badge: 0,
  defaultData: {
    expiry: 4 * 7 * 24 * 3600, // 4 weeks
    sound: 'ping.aiff'
  },
  options: { cert:config.iosCertificate, key:config.iosCertificate },
   }
 };
 var PushNotifications = new require('node-pushnotifications');
 var push = new PushNotifications(settings);

    var deferred = Q.defer();
    var deviceIds = data.device_ids;
    var notify_data = data.notify_data;

    push.send(deviceIds, notify_data, function (result) {
        deferred.resolve(result);
    });
    return deferred.promise;
}*/
service.sendNotification = sendNotification;
module.exports = service;
