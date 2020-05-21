const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Employeedb');

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200,
}));

app.listen(PORT);
