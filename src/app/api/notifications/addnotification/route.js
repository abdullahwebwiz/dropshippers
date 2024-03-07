import { mdb_url } from "@/lib/db";
import { Notification } from "@/lib/model/notification";
import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await mongoose.connect(mdb_url);
    let payload = await req.formData();
    const { text, link } = Object.fromEntries(payload);

    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let n_id = nanoid();

    const notification = new Notification({
      n_id: n_id,
      text: text,
      link: link,
    });
    await notification.save();
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
