import { Router } from "express";
import { version } from "../config/variables.js";
import passport from "../cript/pasport.js";
import {
  reporesGet,
} from "./V1/reportes.js";
import { validarDelete, validatoPost } from "../middleware/DTO/DtoReportes.js";
import { reportPut, reporteDelete, reportePOSTO } from "./V2/reportes.js";

const appReportes = Router();

appReportes.use(passport.authenticate("bearer", { session: false }));

appReportes.get(
  "/",
  version({
    "1.0.0": reporesGet
  })
);
appReportes.post(
  "/crear",
  validatoPost,
  version({
    "2.0.0": reportePOSTO,
  })
);

appReportes.delete(
  "/delete",
  validarDelete,
  version({
    "2.0.0": reporteDelete,
  })
);

appReportes.put(
  "/put",
  validatoPost,
  version({
    "2.0.0": reportPut,
  })
);

export default appReportes;
