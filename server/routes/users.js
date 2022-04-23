const router = require('express').Router();
const bcrypt = require('bcryptjs');
const users = ['Bob', 'Alex', 'Will', 'Tristan'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  router.put('/login', (req, res) => {
    console.log(req.body)
  })


  router.put('/register', (req, res) => {
    console.log("register", req.body)
    const name = req.body.name
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 10);

    db.query(`
    INSERT into users (name, email, password)
    VALUES ($1, $2, $3)
    `, [name, email, password] )
      .then(data => {
        res.json(data)
      })
  })

  router.put('/login', (req,res) => {
    console.log("login", req.body)
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 10);

    
  })
  return router;
}