import { mdb_url } from "@/lib/db";
import { Admin } from "@/lib/model/admin";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  let payload = await req.json();
  let admin = payload.admin;
  let pass = payload.password;
  try {
    await mongoose.connect(mdb_url);
    let result = await Admin.findOne({ admin: admin, password: pass });
    console.log(result);
    if (result) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json(result);
  }
};
