import pool from "./configs/db.config";

const getAllMatches = function() {
  return pool.query(`
    SELECT *
    FROM MATCHES
    `)
    .then(data => {
      console.log(data)
    })

}

module.exports = { getAllMatches }