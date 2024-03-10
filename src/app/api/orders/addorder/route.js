import { mdb_url } from "@/lib/db";
import { DarazOrder } from "@/lib/model/darazorder";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await mongoose.connect(mdb_url);
    let payload = await req.formData();
    const { d_id, image0, image1 } = Object.fromEntries(payload);
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let o_id = nanoid();
    const currentEpochTime = Date.now();

    console.log(d_id);
    console.log(image0);
    console.log(image1);
    console.log(o_id);
    console.log(currentEpochTime);

    // const darazOrder = new DarazOrder({
    //   o_id: i_id,
    //   d_id: d_id,
    //   epoch: currentEpochTime,
    //   status: "processing",
    // });
    // await darazOrder.save();
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
