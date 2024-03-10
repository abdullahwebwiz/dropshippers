import { mdb_url } from "@/lib/db";
import { DarazOrder } from "@/lib/model/darazorder";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let d_id = content.params.d_id;
  try {
    await mongoose.connect(mdb_url);
    let result = await DarazOrder.find({ d_id: d_id });
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
