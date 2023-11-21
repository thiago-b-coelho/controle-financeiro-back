const express = require('express');
const { login, register } = require('./auth.service.js')

const router = express.Router();

router.post('/login', async (req, res) => {
  const data = await login(req.body);
  res.status(200).json({ data })
})

router.post('/register', async (req, res) => {
  const data = await register(req.body);
  res.status(200).json({ data })
})

module.exports = router;