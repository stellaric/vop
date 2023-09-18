// dans modèle en général  les données qu'on va mettre dans la base de donnée.
//crétion de la table de la BDD

import mongoose from "mongoose";
const detailsVoyagesSchema = new mongoose.Schema({
    idHotel: {
        type: string,
        unique: true,
        required: true,
        trim:true
    },
    dateDepart:{
        type:date,
        unique:true,
        required:true,
    },
    dateRetour:{
        type:date,
        unique:true,
        required:true,
    },

    duree:{
        type:date,
        unique:true,
        required:true,
    },
    nbVoyageurs:{
        type:date,
        unique:true,
        required:true,
    },
    
    

})


//on export le model  pour l'utilisé ou on voudra juste avec detailsVoyagesModel
export const  detailsVoyagesModel = mongoose.model("detailsVoyages", detailsVoyagesSchema)