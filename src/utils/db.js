import mongoose from "mongoose";

export default async function db_connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    throw error;
  }
}
