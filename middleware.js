import { NextResponse } from "next/server";

export function middleware(request) {
	// console.log("hello, world! from middleware");
	// return Response.json({
	// 	msg: "hello, world! from middleware",
	// });
	return NextResponse.redirect(new URL("/", request.url));
}

// configure routes that will be affected
export const config = {
	matcher: "/about/:path*",
	// matcher: ["/about/:path*", "/tasks/:path*"],
};
