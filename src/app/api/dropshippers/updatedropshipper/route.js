import { mdb_url } from "@/lib/db";
import { Dropshipper } from "@/lib/model/dropshipper";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  console.log("Q1");
  let payload = await req.formData();
  const { d_id, name, phone, province, city, address } =
    Object.fromEntries(payload);
  if (payload) {
    console.log("Q2");
    try {
      console.log("Q3");
      await mongoose.connect(mdb_url);
      const newData = {
        name: name,
        phone: phone,
        province: province,
        city: city,
        address: address,
      };
      let data = await Dropshipper.findOneAndUpdate(
        { d_id: d_id },
        { $set: newData },
        { new: true }
      );
      console.log(data);
      if (data) {
        return NextResponse.json({ msg: "success" });
      } else {
        return NextResponse.json({ msg: "failed" });
      }
    } catch (error) {
      console.error("Error connecting to MongoDB", error.message);
      return NextResponse.json({ msg: "failed" });
    }
  }
};
