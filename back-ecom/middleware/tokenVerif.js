const jwt = require('jsonwebtoken');

const tokenVerif = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, 'maSuperCle');
        req.user = decoded
        next()
    }
    catch (err) {
        res.status(401).json({ mess: "mauvais token" })
    }
}

module.exports = tokenVerif