const router = require('express').Router();

module.exports = (db) => {
  router.get('/profiles', (req, res) => {
    db.query(`
    SELECT *
    FROM USERS;
    `)
    .then(data => {
      res.json(data.rows)
    })
  })
  return router;
}