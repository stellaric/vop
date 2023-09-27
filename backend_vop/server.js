//mettre en place le server pour ecouter toutes les raquêtes de l'API et répondre

//on importe ex
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const path = require("path")
dotenv.config()

// import { userRoutes } from "./src/routes/UserRoutes.js";
const userRoutes = require("./src/routes/UserRoutes")
const VoyageRoutes = require("./src/routes/VoyageRoutes");

// on ajoute ces 2 lignes pour nous  permettre de recuperer les données qui sont envoyer au server sous forme de JSON
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/user", userRoutes);
app.use("/api/voyage", VoyageRoutes)

// on branche le server sur  un  port  definit par nous . j'ai mis mon sport dans .env.et si port pas definit par defaut c'est le port 5002
const PORT = process.env.PORT || 5002
app.listen(PORT, () => console.log(`le serveur est conecté sur le port ${PORT}`))