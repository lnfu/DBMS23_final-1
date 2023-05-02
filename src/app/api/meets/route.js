import { NextResponse } from "next/server"; 
import mysql from "mysql2/promise"

export async function GET(request) {
    console.log(request);
    return NextResponse.json({ content: 'Use POST method to transfer the Meet ID you want to query' });
}

export async function POST(request) {
    const test = await request.json();
    console.log(test["test"]);
    return NextResponse.json({"content": "success"});
}