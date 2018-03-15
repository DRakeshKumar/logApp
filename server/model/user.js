var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
//var config = require('../../config/main.json');
//var db = mongoose.connect(config.connectionString);
var UserSchema = new Schema({
  created_at: Date,
  ID:String,
  first_name:String,
  last_name:String,
  phone_number:Number,
  email_id:String,
  request_types:String,
  is_manager:String


});
//module.exports = mongoose;
//module.exports = mongoose.model('user', UserSchema);


var User = mongoose.model('User', UserSchema);

// make this available to our users in our Node applications
module.exports = User;
