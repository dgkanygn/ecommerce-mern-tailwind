import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Category = new Schema({
  title: {
    type: String,
    required: true,
  },

  uniqueName: {
    type: String,
    required: true,
    unique: true,
  },

  products: {
    type: Array,
    default: [],
    // required: true,
  },
});

export default mongoose.model("Category", Category);
