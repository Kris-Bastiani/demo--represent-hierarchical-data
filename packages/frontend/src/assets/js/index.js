import getEmployees from './helpers/getEmployees';
import sortByHierarchy from './helpers/sortByHierarchy';

getEmployees().then(employees => console.log(sortByHierarchy(employees, 'managerId')));
