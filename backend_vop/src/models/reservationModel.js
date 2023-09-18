// dans modèle en général  les données qu'on va mettre dans la base de donnée.
//crétion de la table de la BDD

import mongoose from "mongoose";
const reservationSchema = new mongoose.Schema({
    dateArrivee: {
        type: date,
        unique: true,
        required: true,
    },
    dateDepart:{
        type:date,
        unique:true,
        required:true,
    },
    nombreChambres:{
        type:string,
        unique:true,
        required:true,
    },

    nbEnfants:{
        type:Number,
        unique:true,
        required:true,
    },
    nbAdulte:{
        type:Number,
        unique:true,
        required:true,
    },
    nbBebes:{
        type:Number,
        unique:true,
        required:true,
    },
    prixParNuit:{
        type:Number,
        unique:true,
        required:true,
    },

    assurance:{
        type:string,
        unique:true,
        required:true,
        trim:true
    },  

})

//on export le model  pour l'utilisé ou on voudra juste avec reservationModel
export const  reservationModel = mongoose.model("reservation", reservationSchema)