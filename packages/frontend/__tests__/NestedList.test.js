import { h } from 'preact';
import { render } from '@testing-library/preact';

import mockEmployeesSortedByHierarchy from '../../../__mocks__/employeesSortedByHierarchy';

import NestedList from '../src/assets/js/components/atoms/NestedList';

describe('NestedList', () => {
	test('Matches snapshot', () => {
		const { container } = render(<NestedList items={mockEmployeesSortedByHierarchy} />);
		expect(container).toMatchSnapshot();
	});
});
