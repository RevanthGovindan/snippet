var express = require("express");

var router = express.Router();

var login = require('../controllers/login');
var getAllowedTimes = require('../controllers/gettimeslot');
var updateAllowedTimes = require('../controllers/managetimeslots');
var setSchedule = require('../controllers/timeslot');
var deleteSchedule = require('../controllers/deleteschedule');
var approveSchedule = require('../controllers/approveschedule');
var getSchedules = require('../controllers/getschedules');
var getSchedulesAdmin = require('../controllers/getschedulesadmin');
router.post("/login", (request, response) => {
    login(request, response);
});

router.get("/gettimeslot", (request, response) => {
    getAllowedTimes(request, response);
});

router.put("/updatetimeslot", (request, response) => {
    updateAllowedTimes(request, response);
});

router.get('/getschedules/:user', (request, response) => {
    getSchedules(request, response);
});

router.get('/getschedulesadmin', (request, response) => {
    getSchedulesAdmin(request, response);
});

router.post("/setschedule", (request, response) => {
    setSchedule(request, response);
});

router.delete("/deleteschedule/:id", (request, response) => {
    deleteSchedule(request, response);
});

router.post("/approveschedule", (request, response) => {
    approveSchedule(request, response);
});

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = router;