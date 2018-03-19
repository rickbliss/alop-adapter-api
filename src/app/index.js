'use strict'

let express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', require('./api/v1/account/router'));



module.exports = app;