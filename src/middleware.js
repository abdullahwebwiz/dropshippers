import { NextResponse } from "next/server";
export const middleware = (req) => {
  //   return NextResponse.redirect(new URL("/about", req.url));
  let response = NextResponse.next();
//   let x = req.cookies.get("x");
//   if (!x) {
//     response.cookies.set("x", "abdullah");
//   }
  return response;
};

// export const config = {
//   matcher: "/contact",
// }; 