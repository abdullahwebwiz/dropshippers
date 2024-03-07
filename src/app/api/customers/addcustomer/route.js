import { mdb_url } from "@/lib/db";
import { Customer } from "@/lib/model/customers";
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
    const { name, phone, city, address } = Object.fromEntries(payload);

    const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
    let c_id = nanoid();

    const customer = new Customer({
      c_id: c_id,
      name: name,
      phone: phone,
      city: city,
      address: address,
    });
    await customer.save();
    return NextResponse.json({ msg: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
