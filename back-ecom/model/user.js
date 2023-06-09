const db = require('../data/connect')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const saltRounds = 10;

const connexion = async (email, password) => {
    const result = await db.database.get('SELECT * FROM user WHERE email=?', email)
    if (result) {

        if (await bcrypt.compare(password, result.password)) {
            delete result.password
            const token = jwt.sign(result, 'maSuperCle');
            return { mess: "utilisateur connecté", token }
        }
        else {
            return { error: "mot de passe ou identifiant inconnus" }
        }
    } else {
        return { error: "mot de passe ou identifiant inconnus" }
    }

}

const inscription = async (email, password) => {

    const hash = await bcrypt.hash(password, saltRounds)
    // Store hash in your password DB.
    const result = await db.database.run(
        'INSERT INTO user (email,password) VALUES (?,?)',
        email, hash
    )
    // console.log(result);
    if (result.lastID) return result
    else return { error: "erreur lors de l'ajout" }


}

module.exports = {
    connexion,
    inscription
}