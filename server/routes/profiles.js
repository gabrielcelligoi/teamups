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

  router.get('/profiles/1', (req, res) => {
    db.query(`
      SELECT *
      FROM users
      WHERE id = 1;
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  return router;
}