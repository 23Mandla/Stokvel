import mongoose from "mongoose";

export default async function db_connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to the database");
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
    throw error;
  }
}
