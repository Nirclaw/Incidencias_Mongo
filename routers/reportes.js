import { Router } from "express";
import { version } from "../config/variables.js";
import passport from "../cript/pasport.js";
import { reporesGet, reportePOSTO } from "./V1/reportes.js";
import { validatoPost } from "../middleware/DTO/DtoReportes.js";

const appReportes = Router();

appReportes.use(passport.authenticate("bearer", { session: false }));

appReportes.get(
  "/",
  version({
    "1.0.0": reporesGet,
  })
);
appReportes.post(
  "/crear",
  validatoPost,
  version({
    "1.0.0": reportePOSTO,
  })
);

export default appReportes;
