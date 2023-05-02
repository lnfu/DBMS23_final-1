import { NextResponse } from "next/server";
import mysql from "mysql2/promise";


export async function GET(request, context) {
  return NextResponse.json({
    "success": false,
    "message": "Invalid method",
    "error": "This API is for create a follow relation between a user and a lifter. Please use the POST method."
  });
}

export async function POST(request) {
  const body = await request.json();
  const UserID = body["UserID"];
  const LifterID = body["LifterID"];
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "dbms23_final",
  });

  try {
    const query = `
      INSERT INTO Follow (UserID, LifterID)
      VALUES (${UserID}, ${LifterID})
    `;
    const values = [];
    const [data] = await connection.execute(query, values);
    connection.end();
    return NextResponse.json({
      "success": true,
      "message": "Success",
      "data": data,
    });
  } catch (error) {
    return NextResponse.json({
      "success": false,
      "message": "Error executing SQL statement",
      "error": error,
    });
  }
}