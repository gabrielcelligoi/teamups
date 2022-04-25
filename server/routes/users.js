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

  router.use('/login', (req, res) => {
    console.log(req.body)
    const email = req.body.email
    const password = req.body.password

    db.query(`
    SELECT * FROM users
    WHERE email = $1
    `, [email])
      .then(data => {
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          console.log("data", data.rows[0])
          res.send({
            email: data.rows[0].email,
            password: data.rows[0].password
          })
        }
      })
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