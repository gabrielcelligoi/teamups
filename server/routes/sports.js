const router = require('express').Router();

module.exports = (db) => {
  router.get('/sports', (req, res) => {
    db.query(`
    SELECT *
    FROM SPORTS
    `)
    .then(data => {
        res.json(data.rows)
      }
    )
  })
  return router;
}