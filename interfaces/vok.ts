import { Document } from "mongoose";

export interface IVok extends Document {
  koreanisch: string;
  englisch: string;
}
