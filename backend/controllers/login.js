var User = require('../models/User');

const login = (request, response) => {
    User.findOne({ name: request.body.name, password: request.body.password }, (err, result) => {
        if (err) throw err;
        response.send(result);
    });

}

module.exports = login;