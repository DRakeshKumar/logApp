var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PropertySchema = new Schema({
  ID:String,
  property_name:String,
  property_id:String,
  created_on:Date
});
//module.exports = mongoose;
//module.exports = mongoose.model('user', UserSchema);


var Property = mongoose.model('property', PropertySchema);

// make this available to our users in our Node applications
module.exports = Property;


