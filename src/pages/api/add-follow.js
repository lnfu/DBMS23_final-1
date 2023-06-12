import mysql from 'mysql2/promise';
import { authOptions } from '/src/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(404).json({
      success: false,
      message: 'You must be logged in',
    });
    console.log('You must be logged in');
    return;
  }

  if (req.method === 'POST') {
    const body = req.body;
    const UserID = parseInt(session.user.id);
    const LifterID = body['LifterID'];
    console.log(UserID);
    console.log(LifterID)
    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'dbms23_final',
      });

      const check_query1 = `
      SELECT * FROM Follow
      WHERE UserID = ${UserID} AND LifterID = ${LifterID};
    `;
      const [check_data1] = await connection.execute(check_query1);
      console.log(check_data1);

      if (check_data1.length > 0) {
        // console.log("test error");
        res.status(400).send({
          success: false,
          message: 'The follow relationship already exists',
          message: 'LifterID not found',
        });
        return;
      }
      // first check the LifterID is in Database
      const check_query = `
        SELECT * FROM Lifters
        WHERE LifterID = ${LifterID};
      `;
      const [check_data] = await connection.execute(check_query);
      console.log(check_data);

      if (check_data.length === 0) {
        // console.log("test error");
        res.status(400).send({
          success: false,
          message: 'LifterID not found',
        });
        return;
      }


      const query = `
        INSERT INTO Follow (UserID, LifterID)
        VALUES (${UserID}, ${LifterID})
      `;
      await connection.execute(query);
      connection.end();

      res.status(200).json({
        success: true,
        message: 'Success',
        //  data: data,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(405).send({
      success: false,
      message: 'Only POST requests allowed',
    });
  }
}
