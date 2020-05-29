const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const { createDbConnection } = require('../helpers/dbConnectionHandler');
const Employee = require('../models/employeesModel'); // eslint-disable-line no-unused-vars
const routes = require('../routes/employeesRoutes');

createDbConnection();

const server = express();
server.use(helmet());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors({
	origin: 'http://localhost:1234',
	optionsSuccessStatus: 200,
}));

routes(server);

module.exports = server;
