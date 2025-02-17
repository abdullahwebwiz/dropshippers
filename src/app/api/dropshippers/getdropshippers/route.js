import { mdb_url } from "@/lib/db";
import { Dropshipper } from "@/lib/model/dropshipper";
import mongoose from "mongoose";
import { randomBytes } from "crypto";
import { join } from "path";
import { customAlphabet } from "nanoid";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";

export const GET = async (req) => {
  let path = req.nextUrl.searchParams.get('path') || '/';

    console.log('aloooooooooo');
  try {
    await mongoose.connect(mdb_url);
    let result = await Dropshipper.find();
    console.log(result);
    if (result) {
      revalidatePath(path);
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ msg: "failed" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "failed" });
  }
};
