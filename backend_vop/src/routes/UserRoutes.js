// les routes en générales  definnissent le chemin de la page qu'on souhaite afficher sur le navigateur

import { createUsers, deleteUsers, getUsers, putUsers } from "../controllers/UserController.js";
import { signIn, register, logout } from "../controllers/auth.controller.js";
//on importe exprsee
import express from "express";
const router = express.Router();
//authentification
router.post("/register", register);
router.post("/logn", signIn);
router.get("/logout", logout);

router.get("/", getUsers);
router.delete("/", deleteUsers);
router.put("/", putUsers);


export { router as userRoutes };