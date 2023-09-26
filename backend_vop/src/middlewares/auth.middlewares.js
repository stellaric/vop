
// le middleware est entre une requette et une réponse et pour gerer le requête HTTP ex verifeir si token

const jwt = require("jsonwebtoken");
// on crée une fonction pour verifier si la personne a le token ou non
module.exports.checkAuth = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Accès refusé . Vous devez vous connecter et avoir un token' })
    }
    //Extraction du token du header HTTP "Authorization"
    const [_, token] = req.headers.authorization.split(' ');
    try {
        const decodedToken = jwt.verify(
            token,
            process.env.TOKEN_SECRET
        )
        req.token = token
        req.user = decodedToken
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Accès refusé. Token invalide' });
    }
}