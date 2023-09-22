// les controlleurs en générales gerent la logique de l'application

import { userModel } from "../models/userModel.js";


//obtenir tous la liste de tpous les  utilisateurs ;
export const getUsers = async (req, res) => {
    try {
        // on selection tous sauf le mo de passe
        const users = await userModel.find({})
        select('-password')
        res.status(200).json( users)
    } catch (error) {
        console.log(error)
    }

};


//suppression d'utilisateurs.
export const deleteUsers = async (req, res) => {

};
//mettre à jour le rôle des utilisateurs ;
export const putUsers = async (req, res) => {

}
