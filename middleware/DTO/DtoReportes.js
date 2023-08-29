import { check } from "express-validator";

export const validatoPost = [
  check("usu_id_reporte")
    .notEmpty()
    .isNumeric()
    .withMessage("el id es obligatorio"),

  check("usu_incidencia.nivel")
    .notEmpty()
    .isString()
    .withMessage("nivel es obligatorio"),

  check("usu_incidencia.categoria")
    .notEmpty()
    .isString()
    .withMessage("categoria es obligatorio"),

  check("usu_fecha")
    .notEmpty()
    .isString()
    .withMessage("la fecha es obligatoria"),

  check("usu_lugar_incidencia.id_salon")
    .notEmpty()
    .isNumeric()
    .withMessage("el id_salon es obligatorio"),

  check("usu_lugar_incidencia.id_ordenador")
    .notEmpty()
    .isNumeric()
    .withMessage("el id_ordenador es obligatorio"),
];

export const validarDelete = [
  check("usu_id_reporte")
    .notEmpty()
    .isInt()
    .withMessage("el dato es incorrecto"),
];
