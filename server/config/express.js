const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes');
const consign = require('consign');
const app = express();

consign().include('server/controller').into(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', router);
module.exports = app;