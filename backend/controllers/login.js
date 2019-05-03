var User = require('../models/User');

const login = (request, response) => {
    User.findOne({ name: request.body.name, password: request.body.password }, (err, result) => {
        if (err) throw err;
        if (result) {
            response.send(result);
        } else {
            response.send({});
        }
    });

}

module.exports = login;