import axios from 'axios';

const ENDPOINT_URI = 'http://localhost:3002/employees';

export default () => axios.get(ENDPOINT_URI)
	.then(response => response.data)
	.catch(error => error);
