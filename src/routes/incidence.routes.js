import { Router } from "express";
import {
  addIncidence,
  getIncidenceByUserId,
  getAllIncidences,
} from "../controllers/incidence.controller";
//import { createIncidence, getMyIncidenceById, getMyIncidences } from "../controllers/incidence.controller";
//import { verifyToken } from "../middlewares/authentication";

const router = Router();

//router.post('/', verifyToken, createIncidence);
//router.get('/', verifyToken, getMyIncidences);
//router.get('/:id', verifyToken, getMyIncidenceById);

router.post("/", addIncidence);
router.get("/", getAllIncidences);
router.get("/:userId", getIncidenceByUserId);

export default router;
