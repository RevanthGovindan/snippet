const Timeslots = require('../models/Timeslot');

const getSchedules = (request, response) => {
    Timeslots.find((err, result) => {
        if (err) throw err;
        response.send(result);
    });
}

module.exports = getSchedules;