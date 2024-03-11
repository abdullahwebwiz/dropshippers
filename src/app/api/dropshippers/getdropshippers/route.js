import { mdb_url } from "@/lib/db";
import { Dropshipper } from "@/lib/model/dropshipper";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const GET = async () => {
    console.log('aloooooooooo');
  try {
    await mongoose.connect(mdb_url);
    let result = await Dropshipper.find();
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
