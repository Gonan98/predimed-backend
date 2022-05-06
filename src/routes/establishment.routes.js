import { Router } from "express";
import { getEstablishments } from "../controllers/establishment.controller";

const router = Router();

router.get('/', getEstablishments);

export default router;