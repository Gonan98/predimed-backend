import { Router } from "express";
import {
  addReferred,
  getAllReferreds,
  getReferredsByPatient,
} from "../controllers/referred.controller";

const router = Router();

router.post("/", addReferred);
router.get("/", getAllReferreds);
router.get("/patient/:patientId", getReferredsByPatient);

export default router;
