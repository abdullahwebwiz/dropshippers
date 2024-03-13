import { mdb_url } from "@/lib/db";
import { Customer } from "@/lib/model/customers";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  let path = req.nextUrl.searchParams.get('path') || '/';
  try {
    await mongoose.connect(mdb_url);
    let result = await Customer.find();
    if (result) {
      revalidatePath(path);
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    return NextResponse.json(result);
  }
};
