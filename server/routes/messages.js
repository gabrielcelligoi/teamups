const router = require('express').Router();

module.exports = (db) => {

  router.put('/messages', (req,res) => {
    console.log("body", req.body)
    const message = req.body
        

    db.query(`
      INSERT INTO messages (message_txt)
      VALUES ($1);
    `, [message])
  })

  router.get('/messages/:conversationId', (req,res) => {
    const conversationId = req.params.conversationId

    db.query(`
      SELECT *
      FROM messages
      WHERE conversation_id = ${conversationId};

    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  return router;
}