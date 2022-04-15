const router = require('express').Router();

module.exports = (db) => {
  router.get('/matches', (req, res) => {
    db.query(`
    SELECT *
    FROM MATCHES
    `)
    .then(data => {
        console.log(data)
        res.json(data.rows)
      }
    )
  })
  return router;
}