import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Case-exact redirect only — next.config redirects are case-insensitive. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/Saturday") {
    const url = request.nextUrl.clone();
    url.pathname = "/saturday";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/Saturday"],
};
