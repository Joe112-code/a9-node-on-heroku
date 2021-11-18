const mongoose = require('mongoose');
const who_schema = require('./who-schema');
const who_model = mongoose.model('WhoModel', who_schema);
module.exports = who_model;