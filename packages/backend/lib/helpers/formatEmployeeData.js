module.exports = data => data.map(entry => ({
	id: entry.ID,
	managerId: entry['Manager ID'],
	name: entry['Employee Name'],
}));
