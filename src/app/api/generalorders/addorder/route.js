import { mdb_url } from "@/lib/db";
import { generalOrder } from "@/lib/model/generalorder";
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
    const { c_id, productId, quantity, d_id } = Object.fromEntries(payload);
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let o_id = nanoid();
    const currentEpochTime = Date.now();

    const generalorder = new generalOrder({
      o_id: o_id,
      d_id: d_id,
      c_id: c_id,
      p_id: productId,
      p_quantity: quantity,
      epoch: currentEpochTime,
      status: "processing",
    });
    await generalorder.save();

    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
