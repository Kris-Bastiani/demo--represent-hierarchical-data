const request = require('supertest');
const { createDbConnection, closeDbConnection } = require('../lib/helpers/dbConnectionHandler');
const createExpressServer = require('../lib/helpers/createExpressServer');

const server = createExpressServer();

// TODO: troubleshoot this error:
// A worker process has failed to exit gracefully and has been force exited.
// This is likely caused by tests leaking due to improper teardown.
// Try running with --runInBand --detectOpenHandles to find leaks.

describe('/employees route', () => {
	test('Responds with status 200 on GET when there is a db connection', async () => {
		await createDbConnection();
		const response = await request(server).get('/employees');
		expect(response.statusCode).toEqual(200);
		closeDbConnection();
	});

	test('Responds with status 500 on GET when there is no db connection', async () => {
		const response = await request(server).get('/employees');
		expect(response.statusCode).toEqual(500);
	});
});
