import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const { id } = req.query; // MeetID

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'dbms23_final',
    });

    const query1 = `
      SELECT * FROM Lifters WHERE LifterID = ${id}
    `;
    // 選手近五場的比賽
    const query2 = `
      SELECT td.* 
      FROM TotalData td 
      JOIN Meets using(MeetID)
      WHERE LifterID = ${id}
      ORDER BY Date DESC 
      LIMIT 5;
    `;
    const [data1] = await connection.execute(query1);
    const [data2] = await connection.execute(query2);
    connection.end();

    res.status(200).json({
      success: true,
      message: 'Success',
      data: {
        player_info: data1,
        recent_matches: data2,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Error executing SQL statement',
      error: error,
    });
  }
}
