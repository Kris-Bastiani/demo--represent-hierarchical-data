const mongoose = require('mongoose');

const Employee = mongoose.model('Employees');

exports.getEmployees = (request, response) => Employee.find({}, (err, data) => {
	if (err) return response.send(err);

	const employees = data.map(entry => ({
		id: entry.ID,
		managerId: entry['Manager ID'],
		name: entry['Employee Name'],
	}));

	return response.json(employees);
});
