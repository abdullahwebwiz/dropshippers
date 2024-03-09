import mongoose from "mongoose";

const darazOrderModel = new mongoose.Schema({
  o_id: String,
  d_id: String,
  date: String,
  time: String,
  status: String,
});

export const DarazOrder =
  mongoose.models.darazorders || mongoose.model("darazorders", darazOrderModel);
