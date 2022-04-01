import { Router } from 'express';
import { create, deleteById, getAll, getById, updateById } from '../controllers/symptoms.controller'
import { verifyTokenAndAdmin } from '../middlewares/authentication';

const router = Router();

router.post('/', verifyTokenAndAdmin, create);
router.get('/', verifyTokenAndAdmin, getAll);
router.get('/:id', verifyTokenAndAdmin, getById);
router.put('/:id', verifyTokenAndAdmin, updateById);
router.delete('/:id', verifyTokenAndAdmin, deleteById);

export default router;
