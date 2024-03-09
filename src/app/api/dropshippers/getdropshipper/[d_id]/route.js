import { mdb_url } from "@/lib/db";
import { Dropshipper } from "@/lib/model/dropshipper";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const GET = async (req, content) => {
  let d_id = content.params.d_id;
  try {
    await mongoose.connect(mdb_url);
    let result = await Dropshipper.findOne({ d_id: d_id });
    console.log(result);
    if (result) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
