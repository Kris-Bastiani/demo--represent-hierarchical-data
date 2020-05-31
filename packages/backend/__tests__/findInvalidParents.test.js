const mockEmployeesWithErrors = require('../../../__mocks__/employeesWithErrors');

const findInvalidParents = require('../lib/helpers/findInvalidParents');

describe('findInvalidParents()', () => {
	test('Returns array of items with invalid parents', () => {
		const invalidParents = findInvalidParents(mockEmployeesWithErrors, 'managerId');
		const expectedResult = [
			{ id: 310, managerId: 900, name: 'Bar' },
			{ id: 320, managerId: 'Foo', name: 'Baz' },
		];
		expect(invalidParents).toMatchObject(expectedResult);
	});
});
