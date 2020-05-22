const mockEmployeesFormatted = require('../../../__mocks__/employeesFormatted');
const mockEmployeesRaw = require('../../../__mocks__/employeesRaw');

const formatEmployeeData = require('../lib/helpers/formatEmployeeData');

test('Returns expected data', () => {
	expect(formatEmployeeData(mockEmployeesRaw)).toEqual(mockEmployeesFormatted);
});
