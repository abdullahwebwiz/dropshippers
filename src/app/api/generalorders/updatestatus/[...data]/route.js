import { mdb_url } from "@/lib/db";
import { generalOrder } from "@/lib/model/generalorder";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let [o_id, status] = content.params.data;
  console.log(o_id, status); // Check if o_id and status are correctly received
  
  try {
    await mongoose.connect(mdb_url);
    let result = await generalOrder.findOneAndUpdate({ o_id: o_id }, { status: status });
    if (result) {
      return NextResponse.json({ msg: "success" });
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json({ msg: "failed" }); // Fix typo, "failed" should be a string
  }
};
