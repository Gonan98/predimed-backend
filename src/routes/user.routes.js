import { Router } from 'express';
import { add, deleteUser, getAll, getById, getCredentials, updateUser} from '../controllers/user.controller';
import { verifyTokenAndAdmin } from '../middlewares/authentication';

const router = Router();

router.post('/', verifyTokenAndAdmin, add);
router.get('/', verifyTokenAndAdmin, getAll);
router.get('/:id', verifyTokenAndAdmin, getById);
router.get('/:id/credentials', verifyTokenAndAdmin, getCredentials);
router.put('/:id', verifyTokenAndAdmin, updateUser);
router.delete('/:id', verifyTokenAndAdmin, deleteUser);

export default router;
