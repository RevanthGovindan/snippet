var mongoose = require('mongoose');  

var UserSchema = new mongoose.Schema({  
  name: String,
  password: String,
  permissions: Array
});

module.exports = mongoose.model('user', UserSchema);