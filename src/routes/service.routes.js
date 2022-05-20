import { Router } from "express";
import { getServices } from "../controllers/service.controller";

const router = Router();

router.get('/', getServices);

export default router;