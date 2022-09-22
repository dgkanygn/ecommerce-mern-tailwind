import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    // MONGOOSE=mongodb+srv://dgkanuygun:alemdar_polat26@cluster0.keypga6.mongodb.net/commerce?retryWrites=true&w=majority

    await mongoose.connect(process.env.MONGOOSE);
    console.log("db connection successful");
  } catch (error) {
    console.log(error);
  }
};
