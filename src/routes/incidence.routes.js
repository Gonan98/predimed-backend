import { Router } from "express";
import { createIncidence, getMyIncidenceById, getMyIncidences } from "../controllers/incidence.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post('/', verifyToken, createIncidence);
router.get('/', verifyToken, getMyIncidences);
router.get('/:id', verifyToken, getMyIncidenceById);

export default router;