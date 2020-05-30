const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

require('../models/employeesModel');

const routes = require('../routes/employeesRoutes');

module.exports = () => {
	const server = express();

	server.use(helmet());
	server.use(bodyParser.urlencoded({ extended: true }));
	server.use(bodyParser.json());
	server.use(cors({
		origin: 'http://localhost:1234',
		optionsSuccessStatus: 200,
	}));

	routes(server);

	return server;
};
