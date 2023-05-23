const { resolve } = require('styled-jsx/css');
const db = require('./database');
const { data } = require('autoprefixer');

async function runQuery(query, params) {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      console.log(result);
      resolve(result);
    });
  });
}

async function getStandingsByPage(page) {
  const query = `
    SELECT * FROM TotalData TD
    JOIN (
      SELECT LifterID, MAX(TotalKg) AS TotalKg FROM TotalData
      GROUP BY LifterID
    ) AS BTD ON TD.LifterID = BTD.LifterID AND TD.TotalKg = BTD.TotalKg 
    LIMIT 50 OFFSET ?
  `;
  return await runQuery(query, [50*page]);
}


// 選手基本資料
async function getLifterBasicById(id) {
  console.log("test");
  const query = `
    SELECT * FROM Lifters WHERE LifterID = ?
  `;
  return await runQuery(query, [id]);
}

// 選手近五場的比賽
async function getLifterRecent5ById(id) {
  const query = `
    SELECT td.* 
    FROM TotalData td 
    JOIN Meets using(MeetID)
    WHERE LifterID = ${id}
    ORDER BY Date DESC 
    LIMIT 5;
  `;
  return await runQuery(query, []);
}

module.exports = {
  getStandingsByPage,
  getLifterBasicById,
  getLifterRecent5ById,
};