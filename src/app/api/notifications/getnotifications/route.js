import { mdb_url } from "@/lib/db";
import { Notification } from "@/lib/model/notification";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const GET = async (req, content) => {
  let path = req.nextUrl.searchParams.get('path') || '/';

  try {
    await mongoose.connect(mdb_url);
    let result = await Notification.find();
    if (result) {
      revalidatePath(path);
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ msg: "error" });
    }
  } catch (error) {
    console.error("Error connecting", error.message);
    return NextResponse.json(result);
  }
};
