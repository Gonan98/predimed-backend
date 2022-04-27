import { Router } from "express";
import { doPrediction } from "../controllers/ai.controller";

const router = Router();

router.post('/predict', doPrediction);

export default router;