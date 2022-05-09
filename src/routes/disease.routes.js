import { Router } from "express";
import { getDiseaseById, getDiseases } from "../controllers/disease.controller";

const router = Router();

router.get('/', getDiseases);
router.get('/:id', getDiseaseById);

export default router;
