import { SignJWT, jwtVerify } from "jose";
import { PASSWORD, db } from "../config/variables.js";
import { ObjectId } from "mongodb";

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

  res.send({ status: 200, mesagge: createJTW });
};

const validarToken = async (req, token) => {
  try {
    const encoder = new TextEncoder();
    const jwData = await jwtVerify(token, encoder.encode(PASSWORD));

    let res = await db.collection("roles").findOne({
      _id: new ObjectId(jwData.payload.id[0]._id),
      [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`,
    });

    let { _id, permisos, ...usuario } = res;
    return usuario;
  } catch (error) {
    return false;
  }
};
export { CrearToken, validarToken };
