import { NextResponse } from "next/server";

// This function should be marked as `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname;

  // Get cookies
  const token = request.cookies.get("token")?.value || "";

  // Get the public path
  const isPublicPath = path === "/login" || path === "/signup";

  // Get the path to protect
  const isProtectedPath = path === "/profile";

  // If it's a protected path and the user is authenticated, redirect to the profile page
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  // If it's a protected path and the user is not authenticated, redirect to the login page
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/signup"],
};
