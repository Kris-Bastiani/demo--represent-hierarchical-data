const request = require('supertest');
const server = require('../lib/server');

// TODO: troubleshoot this error:
// A worker process has failed to exit gracefully and has been force exited.
// This is likely caused by tests leaking due to improper teardown.
// Try running with --runInBand --detectOpenHandles to find leaks.

describe('/employees route', () => {
	test('Responds with status 200 on GET', async () => {
		const response = await request(server).get('/employees');
		expect(response.statusCode).toEqual(200);
	});
});