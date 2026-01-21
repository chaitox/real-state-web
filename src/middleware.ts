import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get("auth_token")?.value;

    // Protect /dashboard routes
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!authToken) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Optional: Redirect /login to /dashboard if already logged in
    if (request.nextUrl.pathname === "/login") {
        if (authToken) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};
