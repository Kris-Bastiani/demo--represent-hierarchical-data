const mockEmployeesFormatted = require('../../../__mocks__/employeesFormatted');

const findParent = require('../lib/helpers/findParent');

describe('findParent()', () => {
	test("Returns value of the specified item's parent", () => {
		const parent = findParent(mockEmployeesFormatted, 100);
		expect(parent).toMatchObject({
			id: 100,
			managerId: 150,
			name: 'Alan',
		});
	});

	test("Returns undefined if the specified item's parent can't be found", () => {
		const parent = findParent(mockEmployeesFormatted, 900);
		expect(parent).toBeUndefined();
	});
});
