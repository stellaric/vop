import { userModel } from "../models/userModel.js";
//creer  des utilisateurs ;
export const register = async (req, res) => {
    // je recupère ce que l'utilisateur a saisi
    const { nom, prenom, email, password } = req.body

    console.log("req.body", req.body)


    try {
        //  j'appel mon model et sur le model je lui passe les données récupére du corps de la requette
        const user = await userModel.create(
            {
                nom,
                prenom,
                email,
                password
            })
        // si on trouve l'id c'est que le user est crée
        if (user._id) return res.status(201).json({
            message: "l'utilisateur a été créé avec succès ",
            user: user
        })
        // si quelque chose se passe mal on affiche le catch
    } catch (error) {
        res.status(401).json({
            message: "utilisateur n'a pas été créé",
            error: error.message,
        })
    }
};




export const signIn = async (req, res) => {

};

export const logout = async (req, res) => {

};









