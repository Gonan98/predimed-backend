import { Router } from 'express';
import { createUser, deleteUser, getReferredByUser, getUserById, getUserCredentials, getUsers, updateUser } from '../controllers/user.controller';
import { verifyToken, verifyTokenAndAdmin } from '../middlewares/authentication';

const router = Router();

router.post('/', verifyTokenAndAdmin, createUser);
router.get('/', verifyTokenAndAdmin, getUsers);
router.get('/:id', verifyTokenAndAdmin, getUserById);
router.get('/:id/credentials', verifyTokenAndAdmin, getUserCredentials);
router.put('/:id', verifyTokenAndAdmin, updateUser);
router.delete('/:id', verifyTokenAndAdmin, deleteUser);
router.get('/referrals', verifyToken, getReferredByUser);

export default router;
