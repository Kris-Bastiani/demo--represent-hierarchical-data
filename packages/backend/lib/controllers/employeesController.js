const mongoose = require('mongoose');

const Employee = mongoose.model('Employees');

exports.getEmployees = (request, response) => Employee
	.find({}, (err, employee) => (err ? response.send(err) : response.json(employee)));
