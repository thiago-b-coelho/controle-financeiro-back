import { Router } from 'express';
import { getAll, remove, save, update } from './user.model.js';

const router = Router();

router.get('/', async (req, res) => {
  const data = await getAll();

  res.status(200).json({ data })
});

router.get('/:id', async (req, res) => {
  const data = await get(req.params.id);
  return res.status(200).json({ data })
});

router.post('/', async (req, res) => {
  const data = await save(req.body);
  return res.status(200).json({ data })
})

router.delete('/:id', async (req, res) => {
  const data = await remove(req.params.id);
  return res.status(200).json({ data })
})

router.put('/:id', async (req, res) => {
  const data = await update(req.params.id, req.body);
  return res.status(200).json({ data })
})

export default router;