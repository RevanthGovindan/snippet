var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  password: String,
  permissions: Object 
});

module.exports = mongoose.model('user', UserSchema);