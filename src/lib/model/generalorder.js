import mongoose from "mongoose";

const generalOrderModel = new mongoose.Schema({
  o_id: String,
  d_id: String,
  c_id: String,
  p_id: String,
  p_quantity: String,
  epoch: String,
  status: String,
});

export const generalOrder =
  mongoose.models.generalorders ||
  mongoose.model("generalorders", generalOrderModel);
