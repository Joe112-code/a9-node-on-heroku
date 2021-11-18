const profile_model = require('./profile-model');

const findAllProfile = () => profile_model.find();
const createProfile = (newProfile) => profile_model.create(newProfile);
const deleteProfile = (id) => profile_model.deleteOne({_id: id});
const findProfileById = (id) => profile_model.findById(id);
const updateProfile = (id, profile)=> profile_model.updateOne({_id: id}, {$set: profile});




module.exports = {
    findAllProfile, createProfile,deleteProfile,
    findProfileById, updateProfile
};