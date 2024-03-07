import mongoose from "mongoose";
const notificationModel = new mongoose.Schema({
  n_id: String,
  text: String,
  link: String,
});

export const Notification =
  mongoose.models.notifications ||
  mongoose.model("notifications", notificationModel);

  