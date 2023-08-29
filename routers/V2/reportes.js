import { db } from "../../config/variables.js";
import { validationResult } from "express-validator";

let user = db.collection("usuario_reporte");

export const reportePOSTO = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json(errors);
  
      let data = await user.insertOne(req.body);
      return res.send(data);
    } catch (error) {
      res.status(400).send({ status: 400, message: error });
    }
  };
  
  export const reporteDelete = async (req, res) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) return res.status(400).json(error);
  
      let validar = await user.findOne({
        usu_id_reporte: req.body.usu_id_reporte,
      });
      if (!validar)
        return res
          .status(400)
          .send({ status: 400, message: "no se pudo eliminar el reporte" });
      await user.deleteOne({
        usu_id_reporte: req.body.usu_id_reporte,
      });
      return res.send("Reporte eliminado con exito");
    } catch (error) {
      res
        .status(400)
        .send({ status: 400, message: "no se pudo eliminar el reporte" });
    }
  };
  
  export const reportPut = async (req, res) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) return res.status(400).send(error);
      let validar = await user.findOne({
        usu_id_reporte: req.body.usu_id_reporte,
      });
      if (!validar)
        return res
          .status(400)
          .send({ status: 400, message: "no se pudo eliminar el reporte" });
      await user.updateOne(validar,{
        $set: req.body,
      });
      return res.send("Reporte actualizado con exito");
    } catch (error) {
      res.status(400).send({status:400,message:error});
    }
  };