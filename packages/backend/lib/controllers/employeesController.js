const mongoose = require('mongoose');

const formatEmployeeData = require('../helpers/formatEmployeeData');

const READY_STATES = {
	0: 'disconnected',
	1: 'connected',
	2: 'connecting',
	3: 'disconnecting',
	4: 'unauthorized',
	99: 'uninitialized',
};

const Employee = mongoose.model('Employees');

exports.getEmployees = (request, response) => {
	const { readyState } = mongoose.connection;
	// eslint-disable-next-line security/detect-object-injection
	if (readyState !== 1) throw new Error(`Failed to connect to MongoDB (readyState: ${READY_STATES[readyState]})`);

	return Employee.find(
		{},
		(err, employees) => (err ? response.send(err) : response.json(formatEmployeeData(employees))),
	);
};
