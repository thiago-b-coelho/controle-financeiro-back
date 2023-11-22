const express = require('express');
const { login, register } = require('./auth.service.js')

const router = express.Router();

router.post('/login', async (req, res) => {
  if (!req.body.email || !req.body.password){
    return res.status(400).json({error: 'Email and password cannot be empty!'})
  }
  const data = await login(req.body);
  if (data.error) {
    return res.status(403).json({ error: data.error })
  }
  return res.status(200).json({ data })
})

router.post('/register', async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name){
    return res.status(400).json({error: 'Name, email and password cannot be empty!'})
  }
  const data = await register(req.body);
  if (data.error) {
    return res.status(400).json({ error: data.error })
  }
  res.status(200).json({ data })
})

module.exports = router;