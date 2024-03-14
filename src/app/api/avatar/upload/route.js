import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request) {
  // const { searchParams } = new URL(request.url);
  // const filename = searchParams.get("filename");

  let file1 = await request.formData();
  let { file } = Object.fromEntries(file1);

  // console.log(request.body);
  console.log(file);
  const blob = await put("shipping_labels/" + "MyFile123.png", file, {
    access: "public",
  });
  // return NextResponse.json({ msg: "success" });

  return NextResponse.json(blob);
}
