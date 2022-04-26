const router = require('express').Router();

module.exports = (db) => {

  router.get('/messages/all', (req,res) => {
    db.query(`
    SELECT * FROM messages
    `)
      .then((data) => {
        res.json(data.rows)
      })
  })

  router.use('/messages', (req,res) => {

    console.log(req.body)

    const id = req.body.id
    db.query(`
    SELECT * FROM messages
    WHERE message_to = $1
    `, [id])
    .then((data) => {
      res.json(data.rows)
    })
  })

  router.use('/postmessage', (req, res) => {
    const messageTo = req.body.message_to
    const message = req.body.message
    const messageFrom = req.body.message_from

    db.query(`
      INSERT INTO messages (message_to, message_text, message_from)
      VALUES ($1, $2, $3)
    `, [messageTo, message, messageFrom])
  })
  return router;
}
