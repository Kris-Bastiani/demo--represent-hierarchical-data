module.exports = (arr, parentId, idKey = 'id') => arr.find(curr => curr[idKey] === parentId);
