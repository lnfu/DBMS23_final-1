import { NextResponse } from "next/server";
export async function GET(request) {
  return NextResponse.json({
    "success": true,
    "message": "Hello, Next.js!",
    "data": {},
  });
}