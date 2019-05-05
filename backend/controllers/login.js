var User = require('../models/User');

const login = (request, response) => {
    User.findOne({ name: request.body.name, password: request.body.password }, (err, result) => {
        if (err) throw err;
        if (result) {
            let responseData = {
                name: result.name,
                permissions: result.permissions,
                success: true
            };
            response.send(responseData);
        } else {
            response.send({ success: false, message: "Invalid Credentials" });
        }
    });

}

module.exports = login;