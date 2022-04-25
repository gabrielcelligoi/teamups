const router = require('express').Router();

module.exports = (db) => {

  router.put('/conversations', (req,res) => {
    console.log("body", req.body)
    const senderId = req.body.senderId
    const receiverId = req.body.receiverId
    

    db.query(`
      INSERT INTO conversations (sender_id, receiver_id)
      VALUES ($1, $2);
    `, [senderId, receiverId])
  })

  router.get('/conversations/:userId', (req,res) => {
    const userId = req.params.userId

    db.query(`
      SELECT *
      FROM conversations
      WHERE sender_id = ${userId};

    `)
    .then(data => {
      res.json(data.rows)
    })
  })

  return router;
}