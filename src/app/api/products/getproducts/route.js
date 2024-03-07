import { mdb_url } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  console.log(content);
  try {
    await mongoose.connect(mdb_url);
    let result = await Product.find();
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
