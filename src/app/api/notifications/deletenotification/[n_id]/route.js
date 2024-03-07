import { mdb_url } from "@/lib/db";
import { Notification } from "@/lib/model/notification";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let n_id = content.params.n_id;
  console.log(n_id);
  try {
    await mongoose.connect(mdb_url);
    let result = await Notification.deleteOne({ n_id: n_id });
    console.log(result);
    if (result) {
      return NextResponse.json({ msg: "success" });
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "failed" });
  }
};
