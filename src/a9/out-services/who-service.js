const dao = require("../../../db/who/who-dao");

module.exports = (app) => {
    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(who => res.json(who));
    app.get("/rest/who", findAllWho);

    const createWho = (req, res) =>{
        const newWho = {
            "avatarIcon": "/images/java.jpg",
            "userName": "Java",
            "handle": "Java",
            ...req.body,
        };

        dao.createWho(newWho)
            .then((insertedWho) => res.json(insertedWho));
    }






};
