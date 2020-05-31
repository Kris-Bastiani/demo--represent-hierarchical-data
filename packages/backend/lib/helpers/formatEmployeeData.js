const findInvalidParents = require('./findInvalidParents');

module.exports = data => {
	const formattedData = data.map(entry => ({
		id: entry.ID,
		managerId: entry['Manager ID'],
		name: entry['Employee Name'],
	}));

	const invalidManagers = findInvalidParents(formattedData, 'managerId');
	if (invalidManagers.length) console.error('Employees found with invalid managers:', invalidManagers);

	return formattedData;
};
