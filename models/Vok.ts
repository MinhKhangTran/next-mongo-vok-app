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
const Vok = mongoose.model<IVok>("Vok", vokSchema);
//either take existing model or create a new vok model
export default mongoose.models.Vok || Vok;
