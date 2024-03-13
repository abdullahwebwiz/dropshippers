import { mdb_url } from "@/lib/db";
import { DarazOrder } from "@/lib/model/darazorder";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
export const GET = async () => {
  
let path = req.nextUrl.searchParams.get('path') || '/';
  try {
    await mongoose.connect(mdb_url);
    let result = await DarazOrder.find();
    if (result) {
      console.log(result);
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
