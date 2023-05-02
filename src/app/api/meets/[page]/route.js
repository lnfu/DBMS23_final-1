import { NextResponse } from "next/server";
import mysql from "mysql2/promise";


export async function GET(request, context) {
  const MeetID = parseInt(context.params.page); // from 0

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "dbms23_final",
  });


  try {
    const query = `
      SELECT * FROM Meets WHERE MeetID = ${MeetID}
    `;
    const values = [];
    const [data] = await connection.execute(query, values);
    connection.end();
    return NextResponse.json({
      "success": true,
      "message": "Success",
      "data": data,
    });
  } catch(error) {
    return NextResponse.json({
      "success": false,
      "message": "Error executing SQL statement",
      "error": error,
    });
  }
}