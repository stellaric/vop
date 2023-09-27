module.exports = function (req, res, next) {
    if (req.user && req.user.isAdmin === true) {
        return next();
    }

    return res.status(403).json({ error: 'Accès refusé. Seuls les administrateurs peuvent accèder à cette ressource' });
}