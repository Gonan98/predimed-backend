import { Router } from 'express';
import { add, deleteById, getAll, getById, getCredentials, updateById } from '../controllers/user.controller';
import { verifyToken } from '../middlewares/authentication';

const router = Router();

router.post('/', verifyToken, add);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.get('/:id/credentials', verifyToken, getCredentials);
router.put('/:id', verifyToken, updateById);
router.delete('/:id', verifyToken, deleteById);

export default router;
