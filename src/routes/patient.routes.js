import { Router } from "express";
import { addPatient, getAll, getById, getByDocumentNumber } from "../controllers/patient.controller";

const router = Router();

router.post('/', addPatient);
router.get('/', getAll);
router.get('/:id', getById);
router.get('/document/:doc', getByDocumentNumber)

export default router;