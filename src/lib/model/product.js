import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  p_id: String,
  title: String,
  Description: String,
  video: String,
  price: String,
  imgs: Array,
  status: String,
  category:String
});

export const Product =
  mongoose.models.products || mongoose.model("products", productModel);
