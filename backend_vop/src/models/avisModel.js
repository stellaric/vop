
// dans modèle en général  les données qu'on va mettre dans la base de donnée.
//crétion de la table de la BDD

import mongoose from "mongoose";
const avisSchema  = new mongoose.Schema({

    texte: {
        type: string,
        unique: true,
        trim:true // pour enlever les espaces au début et a la fin
    },
    note:{
        type:string,
        unique:true,
        trim:true
    },
    date:{
        type:date,
        unique:true,
        required:true,
    },

      

})



//  ON crée une base de donnée qui s'appelle avis qui se base sur avisSchema 
//qui sera   export a laide de avisModel ou on souhtera l'utilisé
export const  avisModel = mongoose.model("avis", avisSchema)