const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./routes/router');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

// initialize our express app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let port = 8000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", router);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});