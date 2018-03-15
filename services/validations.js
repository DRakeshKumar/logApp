var service = {};
var Q = require('q');
service.check = checkValidation;
//var Speciality = require('./../models/specialityModel.js');


module.exports = service;

function checkValidation(field,type)
{
  var deferred = Q.defer();
  switch(type)
  {
    //check for required field
    case "required":
      if(field == undefined)
        deferred.resolve(0);
      else if(field.trim() == "" )
        deferred.resolve(0);
      else
        deferred.resolve(1);
      break;

    //check for valid email
    case "email":
      if(field.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        deferred.resolve(1);
      else
        deferred.resolve(0);
      break;
    //check for device type
    case "supportedDevices" :
      var support = ['iPhone','Android','Website'];
      if(field == undefined)
        deferred.resolve(0);
      else if(field.trim() == "" )
        deferred.resolve(0);
      else
      {
        if(support.indexOf(field) == -1)
          deferred.resolve(0);
        else
          deferred.resolve(1);
      }
      break;
    case "userType" :
      var role = ["Admin User" ,"Surgeon" ,"Hospital" ,"Nurse"];
      if(field == undefined)
        deferred.resolve(0);
      else if(field.trim() == "" )
        deferred.resolve(0);
      else
      {
        if(role.indexOf(field) == -1)
          deferred.resolve(0);
        else
          deferred.resolve(1);
      }
      break;
    case 'speciality' :
      var deferred = Q.defer();
      Speciality.find({},{ name:1 , _id:0 },function(error,speciality)
      {
        if (error)
        {
          deferred.resolve(error);
        }
        else
        {
          if(field == undefined)
            deferred.resolve(0);
          else if(field.trim() == "" )
            deferred.resolve(0);
          else
          {
            for(var i=0; i<speciality.length; i++){
              if(speciality[i].name.indexOf(field) == -1)
                deferred.resolve(0);
              else
                deferred.resolve(1);
            }

          }
        }
      });
  }
  return deferred.promise;
}
