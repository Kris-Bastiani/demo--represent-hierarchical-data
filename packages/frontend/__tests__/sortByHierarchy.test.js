import mockEmployeesFormatted from '../../../__mocks__/employeesFormatted';
import mockEmployeesSortedByHierarchy from '../../../__mocks__/employeesSortedByHierarchy';

import sortByHierarchy from '../src/assets/js/helpers/sortByHierarchy';

describe('sortByHierarchy', () => {
	test('Sorts a flat array of objects into a hierarchical structure', () => {
		expect(sortByHierarchy(mockEmployeesFormatted, 'managerId')).toMatchObject(mockEmployeesSortedByHierarchy);
	});
});
