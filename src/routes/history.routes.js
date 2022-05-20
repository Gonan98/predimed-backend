import { Router } from "express";
import {
  addHistory,
  getHistoriesByPatient,
  getAllHistories,
} from "../controllers/history.controller";

const router = Router();

router.post("/", addHistory);
router.get("/", getAllHistories);
router.get("/patient/:patientId", getHistoriesByPatient);

export default router;
