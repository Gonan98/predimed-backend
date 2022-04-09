import { Router } from 'express';
import { add, deleteById, getAll, getById, getCredentials, updateById } from '../controllers/user.controller';
import { verifyTokenAndAdmin } from '../middlewares/authentication';

const router = Router();

router.post('/', verifyTokenAndAdmin, add);
router.get('/', verifyTokenAndAdmin, getAll);
router.get('/:id', verifyTokenAndAdmin, getById);
router.get('/:id/credentials', verifyTokenAndAdmin, getCredentials);
router.put('/:id', verifyTokenAndAdmin, updateById);
router.delete('/:id', verifyTokenAndAdmin, deleteById);

export default router;
