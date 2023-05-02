import { NextResponse } from "next/server"; 
import mysql from "mysql2/promise"

export async function GET(request) {
    return NextResponse.json({
      "success": false,
      "message": "Invalid input format",
      "error": "Please give the MeetID you want to query. e.g., /api/meets/1"
    });
}

// POST 測試
// export async function POST(request) {
//     const test = await request.json();
//     console.log(test["test"]);
//     return NextResponse.json({"content": "success"});
// }