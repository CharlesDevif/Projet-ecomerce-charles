const model = require('../model/user')


const inscription = async (req, res) => {
    const result = await model.inscription(req.body.email, req.body.motdepasse)
    res.json(result)
}

const connexion = async (req, res) => {
    const result = await model.connexion(req.body.email, req.body.motdepasse)
    res.json(result)
}

module.exports = {
    inscription,
    connexion
}