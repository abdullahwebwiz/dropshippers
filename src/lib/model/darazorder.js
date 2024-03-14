import mongoose from "mongoose";

const darazOrderModel = new mongoose.Schema({
  o_id: String,
  d_id: String,
  p_id: String,
  p_quantity: String,
  epoch: String,
  paymentimg:String,
  status: String,
});

export const DarazOrder =
  mongoose.models.darazorders || mongoose.model("darazorders", darazOrderModel);
