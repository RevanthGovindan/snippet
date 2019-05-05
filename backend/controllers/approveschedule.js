const Timeslots = require('../models/Timeslot');

const approveSchedule = (request, response) => {
    Timeslots.findByIdAndUpdate(request.body.id, { approved: true }, (err, updateresult) => {
        if (err) throw err;
        if (updateresult) {
            response.send({ sucess: true })
        } else {
            response.send({ sucess: false })
        }
    });
};

module.exports = approveSchedule;