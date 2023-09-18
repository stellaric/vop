// dans modèle en général  les données qu'on va mettre dans la base de donnée.
//crétion de la table de la BDD

import mongoose from "mongoose";
const paimentSchema = new mongoose.Schema({
    montant: {
        type: Number,
        unique: true,
        required: true,
    },
    typePaiement:{
        type:date,
        unique:true,
        required:true,
    }

})
//on export le model  pour l'utilisé ou on voudra juste avec PaimentModel
export const  paimentModel = mongoose.model("paiement", paimentSchema)