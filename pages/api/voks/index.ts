import connectDB from "@/config/db";
import Vok from "@/models/Vok";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const voks = await Vok.find().sort({ createdAt: -1 });
        res.status(200).json(voks);
      } catch (error) {
        res.status(404).json({ msg: `There was an error 🥲`, error });
      }
      break;
    case "POST":
      try {
        const vok = await new Vok({
          korean: req.body.korean,
          english: req.body.english,
        });
        vok.save();
        if (vok) {
          res.status(200).json(vok);
        } else {
          res.status(400);
          throw new Error("There was an error at creating a new vok 🤨");
        }
      } catch (error) {
        res.status(404).json({ msg: `There was an error 🥲`, error });
      }
      break;
    default:
      res.status(400).json({ msg: "ERROR" });
      break;
  }
}
