var mongoose = require('mongoose');

var Timeslots = new mongoose.Schema({
    registeredBy : String,
    date : Date,
    timeslot : String,
    approved : Boolean
});


module.exports = mongoose.model('timeslot', Timeslots);