import express from "express";
import { MyServer } from "./config/variables.js";
import appLogin from "./login/login.js";

const appExpres = express()
appExpres.use(express.json())

appExpres.use("/login",appLogin)


appExpres.listen(MyServer,()=>{
    console.log(`http://${MyServer.hostname}:${MyServer.port}`);

})