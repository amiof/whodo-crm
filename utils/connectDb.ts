import { log } from "console";
import mongoose from "mongoose";
export const connectdb = () => {
  mongoose.set("strictQuery", false);
  const url: string = "mongodb://localhost:27017/nextjs";
  // if (mongoose.connections[0].readyState) return log("connection is ready");
  return mongoose.connect(url, (error) => {
    if (error) {
      return log(error);
    } else {
      log("connect to database");
    }
  });
};
