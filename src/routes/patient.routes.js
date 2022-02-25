import { Router } from "express";
import { addPatient, getReferred, getReferredById } from "../controllers/patient.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post('/', verifyToken, addPatient);
router.get('/', verifyToken, getReferred);
router.get('/:patientId', verifyToken, getReferredById);

export default router;