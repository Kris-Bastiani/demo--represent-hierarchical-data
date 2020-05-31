export default (arr, parentId, idKey = 'id') => arr.find(curr => curr[idKey] === parentId);
