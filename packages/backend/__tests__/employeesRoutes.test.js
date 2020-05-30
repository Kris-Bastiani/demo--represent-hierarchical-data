const request = require('supertest');
const { createDbConnection, closeDbConnection } = require('../lib/helpers/dbConnectionHandler');
const createExpressServer = require('../lib/helpers/createExpressServer');

const server = createExpressServer();

describe('/employees route', () => {
	test('Responds with status 200 on GET when there is a db connection', async () => {
		const spy = jest.spyOn(console, 'error');
		spy.mockImplementation(() => {});
		await createDbConnection();
		const response = await request(server).get('/employees');

		expect(response.statusCode).toEqual(200);

		closeDbConnection();
		spy.mockRestore();
	});

	test('Responds with status 500 on GET when there is no db connection', async () => {
		const response = await request(server).get('/employees');
		expect(response.statusCode).toEqual(500);
	});
});
