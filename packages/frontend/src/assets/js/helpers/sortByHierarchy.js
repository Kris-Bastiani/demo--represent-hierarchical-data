function sortByHierarchy(arr, parentKey, parent) {
	return arr.reduce((acc, curr) => {
		if ((parent && curr[parentKey] !== parent) || (!parent && curr[parentKey])) return acc;
		const children = sortByHierarchy(arr, parentKey, curr.id);
		return [...acc, { ...curr, children }];
	}, []);
}

export default sortByHierarchy;
