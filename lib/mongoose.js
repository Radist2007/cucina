var mongoose = require('mongoose');
var myconfig = require('../myconfig.js');

mongoose.set('debug', true);

mongoose.Promise = global.Promise;
mongoose.connect(myconfig.mongoose.uri, {useMongoClient: true}), myconfig.mongoose.options;

module.exports = mongoose;