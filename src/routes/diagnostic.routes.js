import { Router } from "express";
import { doPrediction } from "../controllers/diagnostic.controller";

const router = Router();

router.post('/', doPrediction);

export default router;