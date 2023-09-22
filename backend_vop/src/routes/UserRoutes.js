// les routes en générales  definnissent le chemin de la page qu'on souhaite afficher sur le navigateur

import { deleteUsers, getUsers, putUsers } from "../controllers/UserController.js";
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

// on renome la route pour ne pas avoir de compliit
export { router as userRoutes };