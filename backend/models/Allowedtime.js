var mongoose = require('mongoose');

var Allowedtime = new mongoose.Schema({
    times : Array
});


module.exports = mongoose.model('allowedtime', Allowedtime);