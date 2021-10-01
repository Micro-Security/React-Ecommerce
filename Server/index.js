// Importing Functions
const express = require("express");
const cookieParser = require('cookie-parser');
const router = require("./Controller");
const runDB = require("./db");

// Initialising Functions
var app = express();
runDB(); // Starting Mongo Database

const port = process.env.PORT || 5000;

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// Allow Other Domain user to access the data through API
app.use(allowCrossDomain);

// Accept Json Data From Requests
app.use(express.json());

// Used To Parse HTTP header cookie
app.use(cookieParser());

// Creating End-points
app.use(router);

// Starting Node Server
app.listen(port, () => console.log(`Listening at ${port}`));
