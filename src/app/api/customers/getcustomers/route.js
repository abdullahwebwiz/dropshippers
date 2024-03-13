import { mdb_url } from "@/lib/db";
import { Customer } from "@/lib/model/customers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const revalidate = true;
export const GET = async (req, content) => {
  try {
    await mongoose.connect(mdb_url);
    let result = await Customer.find();
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
