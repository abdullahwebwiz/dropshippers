import { mdb_url } from "@/lib/db";
import { Customer } from "@/lib/model/customers";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
  let cid =  content.params.cid;
  try {
    await mongoose.connect(mdb_url);

      let result = await Customer.findOne({ c_id: cid });
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
