const findInvalidParents = require('./findInvalidParents');

module.exports = data => {
	const formattedData = data.map(entry => ({
		id: entry.ID,
		managerId: entry['Manager ID'],
		name: entry['Employee Name'],
	}));

	const invalidManagers = findInvalidParents(formattedData, 'managerId');
	if (invalidManagers.length) throw new Error(`${invalidManagers.length} employees found with invalid managers.`);

	return formattedData;
};
