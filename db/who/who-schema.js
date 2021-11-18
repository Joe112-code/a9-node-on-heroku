const mongoose = require('mongoose');
const who_schema = mongoose.Schema({
                                       avatarIcon: String,
                                       userName: String,
                                       handle: String
                                   }, {collection: "who"});
module.exports = who_schema;