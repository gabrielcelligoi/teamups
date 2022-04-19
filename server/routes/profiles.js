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
<<<<<<< HEAD
=======

>>>>>>> c9332a06c79477b51918309e2e6a354545c8d313
    db.query(`
      SELECT *
      FROM users
      WHERE id = ${id};
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  router.get('/profiles/:profileid/matches', (req, res) => {
    const id = req.params.profileid

    db.query(`
      SELECT
        matches.id as match_id,
        users.name as Players,
        sports.name as Sport,
        match_date as Date,
        match_location as Location
      FROM matches 
      LEFT JOIN match_player ON matches.id = match_id
      JOIN sports ON sport_id = sports.id
      LEFT JOIN users ON users.id = ${id}
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  router.get('/profiles/:profileid/sports', (req, res) => {
    const id = req.params.profileid

    db.query(`
      SELECT
        users.id AS user_id,
        users.name AS user_name,
        sports.name AS sport_name,
        sports.id AS sport_id
      FROM users
      JOIN user_sport ON users.id = user_sport.user_id
      JOIN sports ON sports.id = user_sport.sport_id
      WHERE users.id = ${id};
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  router.get('/profiles/:profileid/teams', (req, res) => {
    const id = req.params.profileid

    db.query(`
      SELECT
        users.id AS user_id,
        users.name AS user_name,
        teams.name AS team_name,
        teams.id AS team_id
      FROM users
      JOIN team_member ON users.id = team_member.user_id
      JOIN teams ON teams.id = team_member.team_id
      WHERE users.id = ${id};
    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  return router;
}


