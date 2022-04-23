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
  })
  return router;
}