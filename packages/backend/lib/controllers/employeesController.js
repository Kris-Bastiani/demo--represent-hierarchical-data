const mongoose = require('mongoose');

const formatEmployeeData = require('../helpers/formatEmployeeData');

const Employee = mongoose.model('Employees');

exports.getEmployees = (request, response) => Employee.find(
	{},
	(err, employees) => (err ? response.send(err) : response.json(formatEmployeeData(employees))),
);
