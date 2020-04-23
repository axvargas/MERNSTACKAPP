const mongoose = require('mongoose');

env.PROCESS.mongo_URI;
const URI = 'mongodb://localhost/DB-Test';
mongoose
	.connect(URI)
	.then((db) => console.log('--> DB está conectada'))
	.catch((err) => console.error(err));

module.exports = mongoose;
