const { resolve } = require('styled-jsx/css');
const db = require('./database');
const { data } = require('autoprefixer');

function runQuery(query, params) {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
}

function getStandingsByPage(page) {
  const query =
    `
    SELECT * FROM TotalData TD
    JOIN (
      SELECT LifterID, MAX(TotalKg) AS TotalKg FROM TotalData
      GROUP BY LifterID
    ) AS BTD ON TD.LifterID = BTD.LifterID AND TD.TotalKg = BTD.TotalKg` +
    ' LIMIT ?, 50';
  return runQuery(query, [50*page]);
}


// 選手基本資料
function getLifterBasicById(id) {
  const query = `
    SELECT * FROM Lifters WHERE LifterID = ${id}
  `;
  return runQuery(query, []);
}

// 選手近五場的比賽
function getLifterRecent5ById(id) {
  const query = `
    SELECT td.* 
    FROM TotalData td 
    JOIN Meets using(MeetID)
    WHERE LifterID = ${id}
    ORDER BY Date DESC 
    LIMIT 5;
  `;
  return runQuery(query, []);
}

module.exports = {
  getStandingsByPage,
  getLifterBasicById,
  getLifterRecent5ById,
};