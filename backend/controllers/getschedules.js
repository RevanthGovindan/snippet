const Timeslots = require('../models/Timeslot');

const getSchedules = (request, response) => {
    Timeslots.find({ registeredBy: request.params.user }, (err, result) => {
        if (err) throw err;
        response.send(result);
    });
}

module.exports = getSchedules;