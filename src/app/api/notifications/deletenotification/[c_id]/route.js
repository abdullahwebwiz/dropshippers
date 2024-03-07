import { mdb_url } from "@/lib/db";
import { Customer } from "@/lib/model/customers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let c_id = content.params.c_id;
  console.log(c_id);
  try {
    await mongoose.connect(mdb_url);
    let result = await Customer.deleteOne({ c_id: c_id });
    console.log(result);
    if (result) {
      return NextResponse.json({ msg: "success" });
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "failed" });
  }
};
