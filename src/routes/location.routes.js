import { Router } from "express";
import { getLocations } from "../controllers/location.controller";
import { addPatient } from "../controllers/patient.controller";


const router = Router();

router.get('/', getLocations);
router.post('/', addPatient);

export default router;