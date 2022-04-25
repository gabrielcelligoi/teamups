const router = require('express').Router();

module.exports = (db) => {

  router.put('/messages', (req,res) => {
    console.log("body", req.body)
    const conversation = req.body.conversationId;
    const sender = req.body.sender;
    const message = req.body.text;
        

    db.query(`
      INSERT INTO messages (conversation_id, sender_id, message_txt)
      VALUES ($1, $2, $3);
    `, [conversation, sender, message])
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