import express from "express";
import {controlador_clientes} from "../controllers/userController.js";
const controllers = new controlador_clientes();

const router = express.Router()

// router.post("/login", login)
router.post("/register",controllers.createControllerUser)
router.post("/setAvatar/:id",controllers.setAvatars)


export default router;