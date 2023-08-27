import { Router } from "express";
import { CrearToken } from "../cript/jwt.js";


const appLogin = Router()

appLogin.use("/",CrearToken)

export default appLogin