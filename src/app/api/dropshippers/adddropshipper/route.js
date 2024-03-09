import { mdb_url } from "@/lib/db";
import { Dropshipper } from "@/lib/model/dropshipper";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  try {
    await mongoose.connect(mdb_url);
    let payload = await req.formData();
    const { name, phone, province, city, address, password } =
      Object.fromEntries(payload);

    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let d_id = nanoid();

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("abc: " + hashedPassword);
    const dropshipper = new Dropshipper({
      d_id: d_id,
      name: name,
      province: province,
      phone: phone,
      city: city,
      address: address,
      password: hashedPassword,
    });

    await dropshipper.save();

    return NextResponse.json({ msg: "success", d_id: d_id });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
