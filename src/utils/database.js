// import mysql from 'mysql2/promise'
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'dbms23_final',
});

connection.connect((err) => {
  if (err) {
    console.log('\x1b[31m%s\x1b[0m', 'connect database fail', err);
    return;
  }
  console.log('\x1b[32m%s\x1b[0m', 'database connected');
});

// TODO
// closeConnection()

module.exports = connection;