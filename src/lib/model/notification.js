import mongoose from "mongoose";

const customerModel = new mongoose.Schema({
  c_id: String,
  name: String,
  city: String,
  phone: String,
  address: String,
});

export const Customer =
  mongoose.models.customers || mongoose.model("customers", customerModel);
