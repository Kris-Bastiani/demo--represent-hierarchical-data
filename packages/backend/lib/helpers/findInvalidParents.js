const findParent = require('./findParent');

module.exports = (arr, parentKey, idKey = 'id') => arr.reduce((acc, curr) => {
	if (!curr[parentKey]) return acc;
	return findParent(arr, curr[parentKey], idKey) ? acc : [...acc, curr];
}, []);
