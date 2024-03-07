import { mdb_url } from "@/lib/db";
import { Notification } from "@/lib/model/notification";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  try {
    await mongoose.connect(mdb_url);
    let result = await Notification.find();
    if (result) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ msg: "error" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json(result);
  }
};
