import { Router } from "express";
import {
  addReferred,
  getLabExamsByReferred,
  getReferenceById,
  getReferences,
  getReferredsByPatient,
} from "../controllers/referred.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post("/", verifyToken, addReferred);
router.get("/", verifyToken, getReferences);
router.get("/:id", verifyToken, getReferenceById);
router.get("/:id/laboratory-exams", verifyToken, getLabExamsByReferred);
router.get("/patient/:patientId", verifyToken, getReferredsByPatient);

export default router;
