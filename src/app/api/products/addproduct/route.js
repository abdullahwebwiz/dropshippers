import { mdb_url } from "@/lib/db";
import { Product } from "@/lib/model/product";
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
    const {
      name,
      price,
      videoLink,
      description,
      image0,
      image1,
      image2,
      image3,
      image4,
    } = Object.fromEntries(payload);

    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let p_id = nanoid();
    const files = [image0, image1, image2, image3, image4]
      .filter(Boolean)
      .map(async (file, index) => {
        const { name, type, size, lastModified } = file;
        const newFilename = p_id + index + "." + name.split(".").pop();
        const buff = Buffer.from(await file.arrayBuffer());

        await fs.writeFile(`./src/productimages/${newFilename}`, buff);
        return newFilename;
      });

    const savedFiles = await Promise.all(files);

    const product = new Product({
      p_id: p_id,
      title: name,
      price,
      video: videoLink,
      Description: description,
      status: "active",
    });

    await product.save();

    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
