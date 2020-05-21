const mongoose = require('mongoose');

const { Schema } = mongoose;

const EmployeeSchema = new Schema(
	{
		ID: { type: Number },
		'Manager ID': { type: Number },
		'Employee Name': { type: String },
	},
	{ collection: 'employees' },
);

module.exports = mongoose.model('Employees', EmployeeSchema);
