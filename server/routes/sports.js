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
    console.log("body", req.body)
    const name = req.body.name
    const image = req.body.image
    db.query(`
    INSERT INTO sports (name, image)
    VALUES ($1::text, $2::text)
    `, [name, image])
    .then(data => {
      console.log(data.rows)
    })
    .catch(error => console.log(error))
  })
  return router;
}