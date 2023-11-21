const express = require('express');
const userModel = require('./user.model.js');

const router = express.Router();

router.get('/', async (_, res) => {
  const data = await userModel.getAll();
  res.status(200).json({ data })
});

router.get('/:id', async (req, res) => {
  const data = await userModel.get(req.params.id);
  res.status(200).json({ data })
});

router.post('/', async (req, res) => {
  const data = await userModel.save(req.body);
  res.status(200).json({ data })
})

router.delete('/:id', async (req, res) => {
  const data = await userModel.remove(req.params.id);
  return res.status(200).json({ data })
})

router.put('/:id', async (req, res) => {
  const data = await userModel.update(req.params.id, req.body);
  return res.status(200).json({ data })
})

module.exports = router;