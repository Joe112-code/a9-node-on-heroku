const mongoose = require('mongoose');
const profile_schema = mongoose.Schema({
                                           firstName: String,
                                           lastName: String,
                                           handle: String,
                                           profilePicture: String,
                                           bannerPicture: String,
                                           bio: String,
                                           website: String,
                                           location: String,
                                           dateOfBirth: String,
                                           dateJoined: String,
                                           followingCount: Number,
                                           followersCount: Number,
                                           fullName: String

                                   }, {collection: "profiles"});
module.exports = profile_schema;