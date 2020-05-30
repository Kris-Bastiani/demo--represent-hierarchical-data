function sortByHierarchy(arr, parentKey, parent = null) {
	return arr.reduce((acc, curr) => {
		// eslint-disable-next-line security/detect-object-injection
		if (curr[parentKey] !== parent) return acc;
		const children = sortByHierarchy(arr, parentKey, curr.id);
		return [...acc, { ...curr, children }];
	}, []);
}

export default sortByHierarchy;
