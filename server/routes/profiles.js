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

  router.get('/profiles/:profileid', (req, res) => {
    const id = req.params.profileid

    db.query(`
      SELECT *
      FROM users
      WHERE id = ${id};
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  return router;
}