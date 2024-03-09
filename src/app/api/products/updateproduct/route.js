import { mdb_url } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export const POST = async (req, content) => {
  try {
    await mongoose.connect(mdb_url);
    let payload = await req.formData();
    console.log(payload);
    const { p_id, title, price, video, Description, status, category } =
      Object.fromEntries(payload);
    const newData = {
      title: title,
      price: price,
      Description: Description,
      video: video,
      status: status,
      category: category,
    };

    let data = await Product.findOneAndUpdate(
      { p_id: p_id },
      { $set: newData },
      { new: true }
    );

    if (data) {
      return NextResponse.json({ msg: "success" });
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
