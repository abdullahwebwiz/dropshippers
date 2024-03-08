import mongoose from "mongoose";

const dropshipperModel = new mongoose.Schema({
  d_id: String,
  name: String,
  province: String,
  city: String,
  phone: String,
  address: String,
});

export const Dropshipper =
  mongoose.models.dropshippers ||
  mongoose.model("dropshippers", dropshipperModel);
