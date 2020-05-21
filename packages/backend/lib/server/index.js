const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const Employee = require('../models/employeesModel'); // eslint-disable-line no-unused-vars
const routes = require('../routes/employeesRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/momenton_test__kris_bastiani');

const server = express();
server.use(helmet());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors({
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
}));

routes(server);

module.exports = server;
