import { NextResponse } from "next/server";

export async function middleware(request) {
  const adminIdCookie = request.cookies.get("adminid")?.value;
  const d_idCookie = request.cookies.get("d_id")?.value;
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

  // ______________________________________________________________

  // Array of pages that do not require authentication
  const publicPages = ["/", "/login", "/signup"];

  // Array of pages that require authentication
  const protectedPages = ["/dashboard"];

  const { pathname } = request.nextUrl;

  // Allow unauthenticated users to access public pages
  if (!d_idCookie && publicPages.includes(pathname)) {
    return NextResponse.next();
  }

  // Allow authenticated users to access protected pages
  if (d_idCookie && protectedPages.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect authenticated users from public pages
  if (d_idCookie && publicPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users trying to access protected pages
  if (d_idCookie && protectedPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }
  // ______________________________________________________________
}

// export const config = {
//   matcher: ["/", "/admin", "/adminverify"],
// };
