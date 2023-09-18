//mettre en place le server pour ecouter toutes les raquêtes de l'API et répondre

//on importe la bdd ici
import "./src/config/bdd.js"

//on importe ex
import express from "express"
import { userRoutes } from "./src/routes/UserRoutes.js";



const app = express()
// on ajoute ces 2 lignes pour nous  permettre de recuperer les données qui sont envoyer au server sous forme de JSON
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/user", userRoutes);
// on branche le server sur  un  port  definit par nous . j'ai mis mon sport dans .env.et si port pas definit par defaut c'est le port 5002
const PORT = process.env.PORT || 5002
app.listen(PORT, () => console.log(`le serveur est conecté sur le port ${PORT}`))

