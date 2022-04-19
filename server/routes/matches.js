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
    LEFT JOIN match_player ON matches.id = match_id
    JOIN sports ON sport_id = sports.id
    LEFT JOIN users ON users.id = user_id;
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  router.put('/matches/create', (req, res) => {
    console.log("body", req.body)

    const sport = req.body.sport
    const date = req.body.date
    const location = req.body.location

    db.query(`
      INSERT INTO matches (sport_id, match_date, match_location)
      VALUES ($1::integer, $2::date, $3::text)
    `, [sport, date, location])
    .then(data => {
      res.json(data.rows)
    })
  })

    router.get('/matches/create', (req, res) => {
      db.query(`
        SELECT * FROM matches
        ORDER BY id DESC
        LIMIT 1;
      `)
      .then(data => {
        res.json(data.rows)
      })
    })

    router.put('/matches/add', (req,res) => {
      console.log("body", req.body)
      const userId = req.body.user_id
      const matchId = req.body.match_id

      db.query(`
        INSERT INTO match_player (user_id, match_id)
        VALUES ($1, $2)
      `, [userId, matchId])
    })

    router.get('/matches/:id', (req, res) => {

      const id = req.params.id
      db.query(`
      SELECT matches.id as match_id, users.name as Players,  sports.name as Sport, match_date as Date, match_location as Location FROM matches 
      LEFT JOIN match_player ON matches.id = match_id
      JOIN sports ON sport_id = sports.id
      LEFT JOIN users ON users.id = user_id
      WHERE matches.id = $1;
      `, [id])
      .then(data => {
        res.json(data.rows)
      })
    })
  return router;
}