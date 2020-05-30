const { createDbConnection } = require('./helpers/dbConnectionHandler');
const createExpressServer = require('./helpers/createExpressServer');

const PORT = process.env.PORT || 3002;

createDbConnection();
createExpressServer().listen(PORT);
