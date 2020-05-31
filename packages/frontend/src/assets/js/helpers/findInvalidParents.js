import findParent from './findParent';

export default (arr, parentKey, idKey = 'id') => arr.reduce((acc, curr) => {
	if (!curr[parentKey]) return acc;
	return findParent(arr, curr[parentKey], idKey) ? acc : [...acc, curr];
}, []);
