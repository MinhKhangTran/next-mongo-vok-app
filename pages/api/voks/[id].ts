import connectDB from "@/config/db";
import Vok from "@/models/Vok";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const vok = await Vok.findById(id);
        if (vok) {
          res.status(200).json(vok);
        } else {
          res.status(404).json({ msg: `There is no vok with the id ${id}` });
        }
      } catch (error) {
        res.status(404).json({ msg: `There was an error 🥲`, error });
      }
      break;
    case "PUT":
      try {
        const vok = await Vok.findById(id);
        if (!vok) {
          res.status(400);
          throw new Error("There is no vok");
        }
        const updatedVok = await Vok.findByIdAndUpdate(
          id,
          {
            korean: req.body.korean,
            english: req.body.english,
          },
          { new: true }
        );
        if (vok) {
          res.status(200).json(updatedVok);
        } else {
          res.status(404).json({ msg: `There is no vok with the id ${id}` });
        }
      } catch (error) {
        res.status(404).json({ msg: `There was an error 🥲`, error });
      }
      break;
    case "DELETE":
      try {
        const vok = await Vok.findById(id);
        if (!vok) {
          res.status(400);
          throw new Error("There is no vok");
        }
        await Vok.findByIdAndDelete(id);
        res.status(200).json({ msg: "Vok was deleted" });
      } catch (error) {
        res.status(404).json({ msg: `There was an error 🥲`, error });
      }
      break;
    default:
      res.status(400).json({ msg: "ERROR" });
      break;
  }
}
