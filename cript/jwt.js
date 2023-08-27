import { SignJWT } from "jose";
import { PASSWORD, db } from "../config/variables.js";

const CrearToken = async (req, res, next) => {
  if (Object.keys(req.body).length === 0)
    return res.status(400).send({ status: 400, mesagge: "Datos no enviados" });

  const busqueda = await db
    .collection("roles")
    .aggregate([
      {
        $match: {
          $and: [{ user: req.body.user }, { password: req.body.password }],
        },
      },
    ])
    .toArray();

  if (Object.keys(busqueda).length === 0)
    return res
      .status(400)
      .send({ status: 400, mesagge: "El usuario no existe" });

  const encode = new TextEncoder();
  const id = busqueda;
  const createJTW = await new SignJWT({ id })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("3h")
    .sign(encode.encode(PASSWORD));

  res.send ({ status: 200, mesagge: createJTW })
  
};


export {
    CrearToken
}