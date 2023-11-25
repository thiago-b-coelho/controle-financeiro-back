const express = require('express');
const { get, getAll, save, remove, update } = require('./transaction.model.js');
const authMiddleware = require('../../middleware/authMiddleware.js')

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
  const data = await getAll(req.user.id);
  res.status(200).json({ data })
});

router.get('/:id', authMiddleware, async (req, res) => {
  const data = await get(req.params.id, req.user.id);
  res.status(200).json({ data })
});

router.post('/', authMiddleware, async (req, res) => {
  req.body.user_id = req.user.id;
  const data = await save(req.body);
  res.status(200).json({ data: data, message: `Transaction '${req.body.description}' registered successfully` })
})

router.put('/:id', authMiddleware, async (req, res) => {
  req.body.user_id = req.user.id;
  try {
    const data = await update(req.params.id, req.user.id, req.body);
    return res.status(200).json({ data: data, message: `Transaction '${req.body.description}' updated successfully` })
  } catch (error) {
    console.log(`${error}`);
    return res.status(400).json({ message: `${error}`});
  }
})

router.delete('/:id', authMiddleware, async (req, res) => {
  const data = await remove(req.params.id, req.user.id);
  return res.status(200).json({ data })
})

module.exports = router;