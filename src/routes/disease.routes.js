import { Router } from "express";
import { getDiseases } from "../controllers/disease.controller";

const router = Router();

router.get('/', getDiseases);

export default router;
