import { Router } from "express";
import { addPatient, getPatientsReferred } from "../controllers/patient.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post('/', verifyToken, addPatient);
router.get('/', verifyToken, getPatientsReferred);
//router.get('/:patientId', verifyToken, getReferred);

export default router;