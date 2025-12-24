import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoute = ["/dashboard", "/booking", "/my-bookings"];

export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuthenticated = Boolean(token);
  const reqPath = req.nextUrl.pathname;
  const isPrivateReq = privateRoute.some((route) => reqPath.startsWith(route));

  if (!isAuthenticated && isPrivateReq) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url)
    );
  }

  //   console.log(token, isPrivateReq, reqPath, isAuthenticated);
  //   return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/booking/:path*", "/my-bookings/:path*"],
};
