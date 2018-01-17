var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:32768/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

