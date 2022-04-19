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


// SELECT users.name AS user_name, users.wins, users.losses, teams.name AS team_name, sports.name AS sport_name
//       FROM users
//       JOIN team_member ON users.id = team_member.user_id
//       JOIN teams ON team_member.team_id = teams.id
//       JOIN user_sport ON users.id = user_sport.user_id
//       JOIN sports ON user_sport.sport_id = sports.id
//       WHERE id = ${id};