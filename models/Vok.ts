import { IVok } from "@/interfaces/vok";
import mongoose, { Schema } from "mongoose";

//create Schema
const vokSchema: Schema = new Schema(
  {
    korean: {
      type: String,
      required: [true, "Please add a korean word"],
      lowercase: true,
      trim: true,
    },
    english: {
      type: String,
      required: [true, "Please add an english word"],
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

//export model
//either take existing model or create a new vok model
let Vok = mongoose.models.Vok || mongoose.model<IVok>("Vok", vokSchema);
export default Vok;
