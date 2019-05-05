var mongoose = require('mongoose');

var Timeslots = new mongoose.Schema({
    registeredBy : String,
    date : String,
    timeslot : String,
    approved : false
});


module.exports = mongoose.model('timeslot', Timeslots);