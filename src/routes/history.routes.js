import { Router } from "express";
import { addHistory, getHistoriesByPatient } from "../controllers/history.controller";

const router = Router();

router.post('/', addHistory);
router.get('/', getHistoriesByPatient);

export default router;