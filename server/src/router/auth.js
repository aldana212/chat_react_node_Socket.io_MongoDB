import express from "express";
import {controlador_clientes} from "../controllers/userController.js";
const controllers = new controlador_clientes();

const router = express.Router()

// router.post("/login", login)
router.post("/register",controllers.createControllerUser)


export default router;