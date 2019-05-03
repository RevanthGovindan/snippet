var express = require("express");

var router = express.Router();

var login = require('../controllers/login');
var getAllowedTimes = require('../controllers/gettimeslot');
var updateAllowedTimes = require('../controllers/managetimeslots');
var setSchedule = require('../controllers/timeslot');

router.post("/login", (request, response) => {
    login(request,response);
});

router.get("/gettimeslot", (request, response) => {
    getAllowedTimes(request,response);
});

router.put("/updatetimeslot", (request, response) => {
    updateAllowedTimes(request,response);
});


router.post("/setschedule", (request, response) => {
    setSchedule(request,response);
});

router.delete("/deletetimeslot", (request, response) => {

});

router.post("/approvetimeslot", (request, response) => {

});

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = router;