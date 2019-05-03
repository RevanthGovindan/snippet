const Timeslots = require('../models/Timeslot');

const setSchedule = (request,response) => {
    Timeslots.create(request.body, (err, result) => {
        if (err) throw err;
        response.send(JSON.stringify({ sucess: true }));
    });
};
module.exports = setSchedule;