const employees = require('../controllers/employeesController');

module.exports = app => app.route('/employees')
	.get(employees.getEmployees);
