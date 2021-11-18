const mongoose = require('mongoose');
const profile_schema = require('./profile-schema');
const profile_model = mongoose.model('ProfileModel', profile_schema);
module.exports = profile_model;