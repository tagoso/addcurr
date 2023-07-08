// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is from an allowed origin
 
  const allowedOrigins = ['http://localhost:3000', 'https://addcurr.tago.so'];
  const { origin } = new URL(request.url);

  if (!allowedOrigins.includes(origin)) {
    // If the origin is not allowed, respond with a 403 status
    return new NextResponse(null, { status: 403 });

  } else {
    // If the origin is allowed, continue with the request
    console.log("hello i am middleware from allowed page")
    return NextResponse.next();
  }
}

export const config = {
    matcher: '/api/:path*',
}