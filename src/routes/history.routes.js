import { Router } from "express";
import {
  addHistory,
  getHistoriesByPatient,
  getAllHistories,
} from "../controllers/history.controller";

const router = Router();

router.post("/", addHistory);
router.get("/", getAllHistories);
router.get("/:patient", getHistoriesByPatient);

export default router;
