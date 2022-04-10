import { Router } from "express";
import { add, getAll, updateById, deleteById, getById } from "../controllers/incidence.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post('/', verifyToken, add);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.put('/:id', verifyToken, updateById);
router.delete('/:id', verifyToken, deleteById);

export default router;