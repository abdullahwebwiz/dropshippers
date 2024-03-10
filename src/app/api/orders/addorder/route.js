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
    const { shippingLabel, paymentReceipt, productId, quantity, d_id } =
      Object.fromEntries(payload);
    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let o_id = nanoid();
    const currentEpochTime = Date.now();

    console.log(shippingLabel);
    console.log(paymentReceipt);
    console.log(productId);
    console.log(quantity);
    console.log(d_id);
    console.log(o_id);
    console.log(currentEpochTime);

    const files = [shippingLabel, paymentReceipt]
      .filter(Boolean)
      .map(async (file, index) => {
        const { name, type, size, lastModified } = file;
        const newFilename = o_id + index + "." + name.split(".").pop();
        const buff = Buffer.from(await file.arrayBuffer());

        await fs.writeFile(`./src/orderimages/${newFilename}`, buff);
        return newFilename;
      });

    const savedFiles = await Promise.all(files);

    const darazOrder = new DarazOrder({
      o_id: o_id,
      d_id: d_id,
      p_id: productId,
      p_quantity: quantity,
      epoch: currentEpochTime,
      status: "processing",
    });
    await darazOrder.save();
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
