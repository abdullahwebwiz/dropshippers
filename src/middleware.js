import { NextResponse } from "next/server";
import { mdb_url } from "@/lib/db";
import { Admin } from "@/lib/model/admin";
import mongoose from "mongoose";

export async function middleware(request) {
  await mongoose.connect(mdb_url);
  const admin = request.cookies.get("admin")?.value;
  const adminid = request.cookies.get("adminid")?.value;

  // Find user in collection
  const result = await Admin.findOne({
    admin,
    adminid,
  });

  // User not found
  if (admin && adminid) {
    return NextResponse.redirect(new URL("/adminverify", request.url));
  }
  if (!result) {
    return NextResponse.redirect(new URL("/adminverify", request.url));
  }

  // Verify user id
  if (result.adminid !== adminid) {
    return NextResponse.redirect(new URL("/adminverify", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/adminverify")) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Allow dashboard page
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/admin", "/adminverify"],
};
