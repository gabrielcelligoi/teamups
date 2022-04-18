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

  router.put('/tournaments', (req, res) => {

    const name = req.body.name
    const sport_id = req.body.sport
    const number_of_players = req.body.number_of_players
    const type = req.body.type
    db.query(`
    INSERT INTO tournaments (name, sport_id, number_of_players, type)
    VALUES ($1::text, $2, $3, $4)
    `, [name, sport_id, number_of_players, type])

  })
  return router;
}