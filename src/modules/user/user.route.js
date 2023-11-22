const express = require('express');
const { get, getAll, save, remove } = require('./user.model.js');
const authMiddleware = require('../../middleware/authMiddleware.js')

const router = express.Router();

router.get('/', async (_, res) => {
  const data = await getAll();
  res.status(200).json({ data })
});

router.get('/me', authMiddleware, async (req, res) => {
  res.status(200).json({ data: req.user })
})

router.get('/:id', async (req, res) => {
  const data = await get(req.params.id);
  res.status(200).json({ data })
});

router.post('/', async (req, res) => {
  const data = await save(req.body);
  res.status(200).json({ data })
})

router.delete('/:id', async (req, res) => {
  const data = await remove(req.params.id);
  return res.status(200).json({ data })
})

router.put('/:id', async (req, res) => {
  const data = await update(req.params.id, req.body);
  return res.status(200).json({ data })
})

module.exports = router;