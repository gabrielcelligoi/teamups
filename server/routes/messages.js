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
  return router;
}
