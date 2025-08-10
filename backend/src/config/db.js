import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("connected to Db Successfully");
  } catch (error) {
    console.log("error in connecting mongodb");
    process.exit(1);
  }
};
