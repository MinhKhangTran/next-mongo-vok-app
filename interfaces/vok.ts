import { Document } from "mongoose";

export interface IVok extends Document {
  _id: string;
  korean: string;
  english: string;
  createdAt: string;
  updatedAt: string;
}
