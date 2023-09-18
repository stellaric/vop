// dans modèle en général  les données qu'on va mettre dans la base de donnée.
//crétion de la table de la BDD

import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    prenom: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 6,
        trim: true
    },

    role: {
        type: String,
        default: "client",
        trim: true,
    },

})


//on export le model  pour l'utilisé ou on voudra juste avec userModel
export const userModel = mongoose.model("user", UserSchema)