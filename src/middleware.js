import { NextResponse } from "next/server";

export async function middleware(request) {
  const adminIdCookie = request.cookies.get("adminid")?.value;
  const adminIdEnv = process.env.ADMIN_ID;

  if (!adminIdCookie && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.rewrite(new URL("/adminverify", request.url));
  }
  if (
    adminIdCookie != adminIdEnv &&
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    return NextResponse.rewrite(new URL("/adminverify", request.url));
  }

  if (
    adminIdCookie == adminIdEnv &&
    request.nextUrl.pathname.startsWith("/adminverify")
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  if (request.nextUrl.pathname.startsWith("/adminverify")) {
    return NextResponse.next();
  }
}

// export const config = {
//   matcher: ["/", "/admin", "/adminverify"],
// };
