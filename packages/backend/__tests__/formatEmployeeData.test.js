const mockEmployeesFormatted = require('../../../__mocks__/employeesFormatted');
const mockEmployeesRaw = require('../../../__mocks__/employeesRaw');
const mockEmployeesRawWithErrors = require('../../../__mocks__/employeesRawWithErrors');

const formatEmployeeData = require('../lib/helpers/formatEmployeeData');

describe('findInvalidParents()', () => {
	test('Returns expected data', () => {
		expect(formatEmployeeData(mockEmployeesRaw)).toEqual(mockEmployeesFormatted);
	});

	test('Logs an error if entries with invalid managers are found', () => {
		expect(() => formatEmployeeData(mockEmployeesRawWithErrors)).toThrow();
	});
});
