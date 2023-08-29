import { db } from "../../config/variables.js";

let user = db.collection("usuario_reporte");

export const reporesGet = async (req, res) => {
  try {
    let data = await user
      .aggregate([
        {
          $project: {
            _id: 0,
          },
        },
      ])
      .toArray();
    res.send(data);
  } catch (error) {
    res.send(400).send({ status: 400, message: error });
  }
};


