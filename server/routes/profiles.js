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

  return router;
}


// SELECT users.id, users.name AS user_name, users.wins, users.losses, teams.name AS team_name, sports.name AS sport_name
//       FROM users
//       JOIN team_member ON users.id = team_member.user_id
//       JOIN teams ON team_member.team_id = teams.id
//       JOIN user_sport ON users.id = user_sport.user_id
//       JOIN sports ON user_sport.sport_id = sports.id
//       WHERE users.id = ${id};

// SELECT users.id AS user_id, users.name AS user_name, matches.match_date, matches.match_location, sports.name AS sport_name
// FROM users
// JOIN match_player ON users.id = match_player.user_id 
// JOIN matches ON match_player.match_id = matches.id
// JOIN sports ON sports.id = matches.sport_id
// WHERE users.id = 1;


// SELECT
//   matches.id as match_id,
//   users.name as Players,
//   sports.name as Sport,
//   match_date as Date,
//   match_location as Location
// FROM matches 
// LEFT JOIN match_player ON matches.id = match_id
// JOIN sports ON sport_id = sports.id
// LEFT JOIN users ON users.id = user_id;


