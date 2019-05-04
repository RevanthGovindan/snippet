const Timeslots = require('../models/Timeslot');

const approveSchedule = (request, response) => {
    Timeslots.findById(request.body.id, (err, result) => {
        let msg = false;
        if (err) throw err;
        if (result) {
            let newObj = result;
            let id = result;
            newObj.approved = true;
            Timeslots.findByIdAndUpdate(id, { approved: true }, (err, updateresult) => {
                if (err) throw err;
                msg = true;
            });
        }
        response.send(JSON.stringify({ success: msg }));
    });
};

module.exports = approveSchedule;