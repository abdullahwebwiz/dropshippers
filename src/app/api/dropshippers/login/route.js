import { mdb_url } from "@/lib/db";
import { Dropshipper } from "@/lib/model/dropshipper";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const POST = async (req) => {
  try {
    await mongoose.connect(mdb_url);
    let payload = await req.formData();
    const { phone, password } = Object.fromEntries(payload);
    console.log(phone);
    console.log(password);
    let result = await Dropshipper.findOne({ phone: phone });
    console.log(result);
    if (result) {
      const isMatch = await bcrypt.compare(password, result.password);
      if (isMatch) {
        return NextResponse.json({ msg: "success", d_id: result.d_id });
      } else {
        return NextResponse.json({ msg: "failed" });
      }
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
