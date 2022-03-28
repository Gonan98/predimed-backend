import { Router } from "express";
import { getEstablishments } from "../controllers/establishments.controller";
import { getEstablishmentsDestinyService } from "../controllers/establishmentsDestinyService.controller";
import { getEstablishmentsServices } from "../controllers/establishmentsService.controller";
import { getEstablishmentsSpecialties } from "../controllers/establishmentsSpecialties.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.get('/', verifyToken, getEstablishments);
router.get('/:establishmentCode/destiny-services', verifyToken, getEstablishmentsDestinyService);
router.get('/:establishmentCode/services', verifyToken, getEstablishmentsServices);
router.get('/:establishmentCode/specialties', verifyToken, getEstablishmentsSpecialties);

export default router;