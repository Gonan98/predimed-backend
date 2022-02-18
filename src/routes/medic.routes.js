import { Router } from 'express';
import {
  createMedic,
  deleteMedic,
  getAllMedics,
  getMedicById,
  updateMedic,
} from '../controllers/medic.controller';

const router = Router();

router.post('/', createMedic);
router.get('/', getAllMedics);
router.get('/:id', getMedicById);
router.put('/:id', updateMedic);
router.delete('/:id', deleteMedic);

export default router;
