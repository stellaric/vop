// import { userModel } from "../models/userModel.js";

const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const models = require("../../models")


//définir l'age maximum du token (jour * heure * minute * seconde * tierce)
const maxAge = 1 * 24 * 60 * 60 * 1000
//générer le token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
}

module.exports.register = async (req, res) => {
    // je recupère ce que l'utilisateur a saisi
    let { lastname, firstname, email, password, isAdmin } = req.body
    if (!lastname || !firstname || !email || !password) {
        return res.status(400).json({
            message: "tous les champs sont obligatoires ! veuillez bien les remplir"
        })
    }
    try {
        //  j'appel mon model et sur le model je lui passe les données récupére du corps de la requette
        isAdmin = false
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt)
        await models.User.create({ lastname, firstname, email, password, isAdmin });
        res.status(201).json({
            message: "L'inscription s'est bien passé"
        })

    } catch (error) {
        const errMessage = error.errors[0].message
        res.status(404).json({
            message: "utilisateur n'a pas été créé",
            error: errMessage,
        })
    }
};




module.exports.signIn = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(501).json({
            message: "l'email et le mot de passe sont obligtoires"
        })
    }
    try {
        const userToconnecte = await models.User.scope('withPassword').findOne({
            where: {
                email
            }
        })
        if (userToconnecte.dataValues.email !== email) {
            return res.status(501).json({
                message: "l'email que  vous avez fourni ne correspond pas  à un utilisateur existant"
            })
        }
        console.log(userToconnecte.dataValues.password)
        const comparePassword = await bcrypt.compare(password, userToconnecte.dataValues.password)
        if (!comparePassword) {
            return res.status(404).json({
                message: "votre mot de passe est incorrect"
            })
        }
        const token = createToken(userToconnecte.dataValues.id)
        const { id, lastname, firstname, isAdmin } = userToconnecte.dataValues
        const connectedUser = {
            id,
            lastname,
            firstname,
            email:userToconnecte.dataValues.email,
            isAdmin
        }
        // res.cookie('jwt', token, { httpOnly: true, maxAge })
        res.status(200).json({
            user: connectedUser,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: error
        })
    }
};

module.exports.logout = async (req, res) => {

};









