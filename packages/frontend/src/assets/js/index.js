import 'core-js/stable';
import 'regenerator-runtime/runtime';

import getEmployees from './helpers/getEmployees';

getEmployees().then(console.log);
