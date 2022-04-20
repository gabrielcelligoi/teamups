const router = require('express').Router();


module.exports = (db) => {

router.put('/teams', (req,res) => {
    console.log("body", req.body)
    const name = req.body.name
    const image = req.body.image
    const sportId = req.body.sportId

    db.query(`
    INSERT INTO teams (name, image_url, sport_id)
    VALUES ($1::text, $2::text, $3::integer)
    `, [name, image, sportId])
    .then(data => {
      console.log(data.rows)
    })
    .catch(error => console.log(error))
  })
  router.get('/teams', (req, res) => {
    db.query(`
    SELECT *
    FROM teams
    `)
    .then(data => {
        res.json(data.rows)
      }
    )
  })
  return router;
}