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

  router.put('/sports/:id', (req,res) => {

    const name = Object.keys(req.body)[0]
    db.query(`
    INSERT INTO sports (name)
    VALUES ($1::text)
    `, [name])
    .then(data => {
      console.log(data.rows)
    })
    .catch(error => console.log(error))
  })
  return router;
}