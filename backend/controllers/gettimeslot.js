const Times = require('../models/Allowedtime');

const getAllowedTimes = (request, response) => {
    Times.findOne({}, (err, result) => {
        if (err) throw err;
        response.send(result)
    });
};
module.exports = getAllowedTimes;