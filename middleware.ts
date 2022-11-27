import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth, { NextRequestWithAuth } from "next-auth/middleware";

const requiresLogin = ["/dashboard"];
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  if (requiresLogin.some((path) => pathname.startsWith(path))) {
    return withAuth(request as NextRequestWithAuth);
  }
  return res;
}
