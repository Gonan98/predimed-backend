import { Router } from "express";
import { addAntecedent, getAntecedentsByPatient } from "../controllers/antecedent.controller";

const router = Router();


router.post('/', addAntecedent);
router.get('/', getAntecedentsByPatient);

export default router;