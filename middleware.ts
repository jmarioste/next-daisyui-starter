import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

//paths that require authentication / authorization
const requireAuth: string[] = ["/admin"];

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({ req: request });
    //check not logged in
    if (!token) {
      const url = new URL(`/api/auth/signin`, request.url);
      url.searchParams.set("redirectUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }

    //check if not authorized
    if (token.role !== "admin") {
      const url = new URL(`/403`, request.url);
      return NextResponse.rewrite(url);
    }
  }
  return res;
}
