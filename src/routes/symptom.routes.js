<<<<<<< HEAD
import { Router } from "express";
import { getSymptoms } from "../controllers/symptoms.controller";

const router = Router();

router.get('/', getSymptoms);

export default router;
=======
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
>>>>>>> 8d7547ec02cfddc9d595a3d45ec803a840a4fcf5
