import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

const requiresLogin = ["/admin"];
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  console.log(request.ip, request.geo?.city, request.geo?.country);
  // if (requiresLogin.some((path) => pathname.startsWith(path))) {
  //   // return withAuth(request as NextRequestWithAuth);
  //   const session = await getToken({ req: request });
  //   if (!session) {
  //     const url = new URL(`/api/auth/signin`, request.url);
  //     url.searchParams.set("redirectUrl", encodeURI(request.url));
  //     return NextResponse.redirect(url);
  //   }
  // }

  if (requiresLogin.some((path) => pathname.startsWith(path))) {
    return withAuth(request as NextRequestWithAuth);
  }
  return res;
}
