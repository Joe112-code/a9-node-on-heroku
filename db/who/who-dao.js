const who_model = require('./who-model');

const findAllWho = () => who_model.find();
const createWho = (newWho) => who_model.create(newWho);
const deleteWho = (id) => who_model.deleteOne({_id: id});
const updateWho = (id, who) => who_model.updateOne({_id: id}, {$set: who});





module.exports = {
    findAllWho, createWho,
    deleteWho, updateWho
};