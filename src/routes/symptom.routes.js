import { Router } from "express";
import { getSymptoms } from "../controllers/symptoms.controller";

const router = Router();

router.get('/', getSymptoms);

export default router;