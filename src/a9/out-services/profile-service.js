let profile = require('../reducers/data/profile.json');
const dao = require('../../../db/profile/profile-dao')

module.exports = (app) => {

    // const getCurrentProfile = (req, res) => {
    //     res.json(profile);
    // }
    // app.get('/api/profile', getCurrentProfile);

    const getCurrentProfile = (req, res) => {
        dao.findAllProfile()
            .then(profile => res.json(profile));


    }
    app.get('/rest/profile', getCurrentProfile);


    // const updateCurrentProfile = (req, res) => {
    //     profile = [req.body];
    //     res.json(profile);
    // }
    // app.put('/api/profile', updateCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        const id = req.params['id'];
        //const profile = dao.findProfileById(id)
        dao.updateProfile(id, req.body).then(status => res.send(status));

    }

    // const updateCurrentProfile = (req, res) =>
    //     dao.updateProfile(req.params.id, req.body)
    //         .then(status => res.send(status));

    app.put('/rest/profile/:id', updateCurrentProfile);


};