import { NextResponse } from "next/server";
import mysql from "mysql2/promise"

export async function GET(request, context) {
  const page = parseInt(context.params.page) - 1;

  const connection = await mysql.createConnection({
    host: "localhost",
    database: "dbms23_final",
    user: "root",
    password: "root"
  });
  
  try {
    const query = "SELECT * FROM TotalData ORDER BY TotalKg DESC Limit "  + (50*page).toString() + ", 50";
    const values = [];
    const [data] = await connection.execute(query, values);
    connection.end();
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse('Error');
  }

}