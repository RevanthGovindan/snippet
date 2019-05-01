var User = require('../models/User');

const login = (request, response) => {
    User.findOne({ name: request.body.name, password: request.body.password }, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

    response.send("done");
}

module.exports = login;