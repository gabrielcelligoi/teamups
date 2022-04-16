const router = require('express').Router();

module.exports = (db) => {
  router.get('/matches', (req, res) => {
    db.query(`
    SELECT *
    FROM MATCHES
    `)
    .then(data => {
        res.json(data.rows)
      }
    )
  })

  router.get('/matches/all', (req, res) => {
    db.query(`
    SELECT matches.id as match_id, users.name as Players,  sports.name as Sport, match_date as Date, match_location as Location FROM matches 
    JOIN match_player ON matches.id = match_id
    JOIN sports ON sport_id = sports.id
    JOIN users ON users.id = user_id;
    `)
    .then(data => {
      res.json(data.rows)
    })
  })
  return router;
}