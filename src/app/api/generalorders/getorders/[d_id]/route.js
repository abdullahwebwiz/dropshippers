import { mdb_url } from "@/lib/db";
import { generalOrder } from "@/lib/model/generalorder";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const GET = async (req, content) => {
  let path = req.nextUrl.searchParams.get('path') || '/';
  let d_id = content.params.d_id;
  try {
    await mongoose.connect(mdb_url);
    let result = await generalOrder.find({ d_id: d_id });
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
