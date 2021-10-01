const express=require("express");
require("./db");
const router=require("./Controller");
const cookieParser = require('cookie-parser');
var app=express();

const port=process.env.PORT || 5000;


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.use(express.json());

app.use(cookieParser());

app.use(router);

app.listen(port,()=>console.log(`Listening at ${port}`));

