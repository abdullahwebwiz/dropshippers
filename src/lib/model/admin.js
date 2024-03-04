import mongoose from "mongoose";

const adminModel = new mongoose.Schema({
  admin: String,
  password: String,
});

export const Admin =
  mongoose.models.admins || mongoose.model("admins", adminModel);
