import { Router } from "express";
import {
  addEstablishmentDestinyServices,
  getAllEstablishmentDestinyServices,
  getEstablishmentDestinyServicesByEstablishment,
} from "../controllers/establishment-destiny-services.controller";

const router = Router();

router.post("/", addEstablishmentDestinyServices);
router.get("/", getAllEstablishmentDestinyServices);
router.get("/:establishment", getEstablishmentDestinyServicesByEstablishment);

export default router;
