const router = require('express').Router();

module.exports = (db) => {
  
  router.use('/current', (req, res) => {
    console.log(req.body)
    const email = req.body.email

    db.query(`
    SELECT * FROM users
    WHERE email = $1
    `, [email])
    .then(data => {
      res.json(data.rows[0])
    })
  })


  return router;
}

