import { mdb_url } from "@/lib/db";
import { DarazOrder } from "@/lib/model/darazorder";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
export const POST = async (req) => {
  try {
    await mongoose.connect(mdb_url);
    let payload = await req.formData();
    const { shippingLabel, paymentReceipt, productId, quantity, d_id } =
      Object.fromEntries(payload);
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let o_id = nanoid();
    const currentEpochTime = Date.now();

    const files = [shippingLabel, paymentReceipt]
      .filter(Boolean)
      .map(async (file, index) => {
        const { name, type, size, lastModified } = file;
        const newFilename = o_id + index + ".png" + name.split(".").pop();
        console.log(type);
        if (type == "application/pdf") {
          const blob = await put("shipping_labels/" + newFilename, file, {
            access: "public",
            addRandomSuffix: false,
          });
        } else {
          const blob = await put("payments/" + o_id + index + ".png", file, {
            access: "public",
            addRandomSuffix: false,
          });          
        }
        return newFilename;
      });

    const savedFiles = await Promise.all(files);
    const darazOrder = new DarazOrder({
      o_id: o_id,
      d_id: d_id,
      p_id: productId,
      p_quantity: quantity,
      epoch: currentEpochTime,
      paymentimg: newFilename,
      status: "processing",
    });
    await darazOrder.save();
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
