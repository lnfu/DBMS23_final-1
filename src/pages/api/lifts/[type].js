import mysql from 'mysql2/promise';
import { authOptions } from '/src/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';

// for session
// consider store this function in another file (e.g., common.js)?
export async function getServerSideProps(context) {
  console.log('getServerSideProps');
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  // maybe 改成不要 return false，而是 return data without "isFollow" make more sense?
  if (!session) {
    res.status(404).json({
      success: false,
      message: 'You must be logged in',
    });
    return;
  }

  console.log(session);

  const query = req.query;
  const type = query['type'];
  const id = parseInt(session.user.id);

  if (type !== 'squat' && type !== 'bench' && type !== 'deadlift') {
    // error
    res.status(404).send({
      success: false,
      message: 'type should be squat | bench | deadlift',
    });
    return;
  }

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'dbms23_final',
    });
    const query = `
      SELECT
        ${type}Data.*,
        Meets.MeetName,
        Lifters.Name AS LifterName,
        GREATEST(${type}1Kg, ${type}2Kg, ${type}3Kg) AS ${type}Best,
        CASE
          WHEN Follow.UserID=${id} THEN 1 
          ELSE 0 
        END AS isFollow
      FROM ${type}Data
      JOIN Meets USING(MeetID)
      JOIN Lifters USING(LifterID)
      LEFT JOIN Follow ON ${type}Data.LifterID=Follow.LifterID
      ORDER BY ${type}Best DESC`;
    const [data] = await connection.execute(query);
    connection.end();
    console.log(data);
    res.status(200).json({
      success: true,
      message: 'Success',
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Error executing SQL statement',
      error: error,
    });
  }
}
