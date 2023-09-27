// les routes en générales  definnissent le chemin de la page qu'on souhaite afficher sur le navigateur
const authController = require("../controllers/auth.controller");
//on importe exprsee
const UserController = require("../controllers/UserController")
const router = require("express").Router();

const checkAuth = require("../middlewares/auth.middlewares")
// const router = express
//authentification
router.post("/register", authController.register);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

router.get("/",checkAuth.checkAuth, UserController.getUsers);
router.get("/:id",UserController.getUser)
router.delete("/", UserController.deleteUsers);
router.put("/", UserController.putUsers);


module.exports = router;