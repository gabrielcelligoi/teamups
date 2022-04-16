const router = require('express').Router();

module.exports = (db) => {
  router.get('/tournaments', (req, res) => {
    db.query(`
    SELECT *
    FROM TOURNAMENTS
    `)
    .then(data => {
        res.json(data.rows)
      }
    )
  })
  return router;
}