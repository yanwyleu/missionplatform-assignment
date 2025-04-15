import { connect, disconnect } from "mongoose";

export const connectDB = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const uri = process.env.MONGO_DATABASE_URI || "";
      console.log('db-uri:', process.env.MONGO_DATABASE_URI)
      await connect(uri);
      resolve("MongoDB connected 😍");
    } catch (err) {
      reject("MongoDB connection failed 😭");
      console.log(err);
    }
  });
};
export const disconnectDB = async () => {
  try {
    await disconnect();
    console.log("MongoDB disconnected 😒");
  } catch (err) {
    console.log("MongoDB disconnection failed 😭");
    console.log(err);
  }
};