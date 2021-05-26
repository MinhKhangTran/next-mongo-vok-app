import { IVok } from "@/interfaces/vok";
import mongoose, { Schema } from "mongoose";

//create Schema
const VokSchema: Schema = new Schema(
  {
    koreanisch: { type: String, lowercase: true, trim: true },
    englisch: { type: String, lowercase: true, trim: true },
  },
  { timestamps: true }
);

//export model
export const Vok = mongoose.model<IVok>("Vok", VokSchema);
