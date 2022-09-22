import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    bio: {
      type: String,
      max: 75,
    },

    password: {
      type: String,
      required: true,
      min: 5,
    },

    favs: {
      type: Array,
      default: [],
    },

    products: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", User);
