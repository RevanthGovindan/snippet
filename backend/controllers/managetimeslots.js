const Times = require('../models/Allowedtime');

const updateAllowedTimes = (request, response) => {
    Times.updateOne(request.body, (err, result) => {
        if (err) throw err;
        response.send(JSON.stringify({ sucess: true }));
    });
};
module.exports = updateAllowedTimes;