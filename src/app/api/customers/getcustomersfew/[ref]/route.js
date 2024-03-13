import { mdb_url } from "@/lib/db";
import { Customer } from "@/lib/model/customers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
export const GET = async (req, content) => {
  let path = req.nextUrl.searchParams.get('path') || '/';

  let ref = content.params.ref;
  try {
    await mongoose.connect(mdb_url);
    let result = await Customer.find({ reference: ref });
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
