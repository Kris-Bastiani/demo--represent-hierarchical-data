import { h, render } from 'preact';

import getEmployees from './helpers/getEmployees';
import sortByHierarchy from './helpers/sortByHierarchy';
import NestedList from './components/atoms/NestedList';

const elRoot = document.getElementById('js__app');

getEmployees().then(employees => {
	render(<NestedList items={sortByHierarchy(employees, 'managerId')} />, elRoot);
});
