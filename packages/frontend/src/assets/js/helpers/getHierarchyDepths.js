function getHierarchyDepths(arr, currLevel = 1, childrenKey = 'children') {
	return arr.reduce((acc, curr) => (curr[childrenKey] && curr[childrenKey].length
		? [...acc, currLevel, ...getHierarchyDepths(curr[childrenKey], currLevel + 1, childrenKey)]
		: [...acc, currLevel]), []);
}

export default getHierarchyDepths;
