import { Document } from "mongoose";

export interface IVok extends Document {
  korean: string;
  english: string;
}
