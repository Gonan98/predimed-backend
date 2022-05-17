import { Router } from "express";
import {
  getAllEstablishmentSpecialties,
  getEstablismentSpecialtyByEstablishment,
  addEstablishmentSpecialty,
} from "../controllers/establishment-specialties.controller";

const router = Router();

router.post("/", addEstablishmentSpecialty);
router.get("/", getAllEstablishmentSpecialties);
router.get("/:establishment", getEstablismentSpecialtyByEstablishment);

export default router;
