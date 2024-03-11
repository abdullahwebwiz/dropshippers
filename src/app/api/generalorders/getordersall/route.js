import { mdb_url } from "@/lib/db";
import { generalOrder } from "@/lib/model/generalorder";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await mongoose.connect(mdb_url);
    let result = await generalOrder.find();
    if (result) {
      console.log(result);
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json(result);
  }
};
