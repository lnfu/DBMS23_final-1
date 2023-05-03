import mysql from 'mysql2/promise'

export default async function handler(req, res) {
  const { id } = req.query // UserID

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'dbms23_final',
    })

    const query = `
      SELECT LifterID FROM Follow WHERE UserID = ${id}
    `
    const [data] = await connection.execute(query)
    connection.end()

    res.status(200).json({
      success: true,
      message: 'Success',
      data: data,
    })
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Error executing SQL statement',
      error: error,
    })
  }
}