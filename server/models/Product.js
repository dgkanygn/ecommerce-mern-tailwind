import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: {
      type: String,
      required: true,
      max: 60,
    },

    description: {
      type: String,
      required: true,
      max: 1500,
    },

    price: {
      type: String,
      required: true,
    },

    owner: {
      type: String,
      required: true,
    },

    productImage: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    favorited: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", Product);
