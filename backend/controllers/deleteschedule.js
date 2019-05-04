const Timeslots = require('../models/Timeslot');

const deleteSchedule = (request,response) => {
    Timeslots.findOneAndDelete(request.body.id, (err, result) => {
        if (err) throw err;
        response.send(JSON.stringify({ sucess: true }));
    });
};
module.exports = deleteSchedule;