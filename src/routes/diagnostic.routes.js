import { Router } from 'express';
import { create, deleteById, getAll, getById, updateById, consult } from '../controllers/diagnostics.controller'
import { verifyTokenAndAdmin } from '../middlewares/authentication';

const router = Router();

router.post('/consult', verifyTokenAndAdmin, consult);
router.post('/', verifyTokenAndAdmin, create);
router.get('/', verifyTokenAndAdmin, getAll);
router.get('/:id', verifyTokenAndAdmin, getById);
router.put('/:id', verifyTokenAndAdmin, updateById);
router.delete('/:id', verifyTokenAndAdmin, deleteById);

export default router;
