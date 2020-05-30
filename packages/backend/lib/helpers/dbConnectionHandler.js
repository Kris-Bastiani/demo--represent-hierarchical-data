const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DB_URI = 'mongodb://localhost/demo--represent-hierarchical-data';

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const createDbConnection = async () => {
	await mongoose.connect(DB_URI, options);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.on('disconnected', console.error.bind(console, 'database disconnected:'));
	return db;
};

const closeDbConnection = () => mongoose.disconnect();

module.exports = { createDbConnection, closeDbConnection };
