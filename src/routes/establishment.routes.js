import { Router } from "express";
import { getDestinyEstablishments, getEstablishmentById, getEstablishmentDestinyServices, getEstablishmentServices, getEstablishmentSpecialties, getMyEstablishment } from "../controllers/establishment.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.get('/source', verifyToken, getMyEstablishment);
router.get('/destiny', verifyToken, getDestinyEstablishments);
router.get('/:code/services', verifyToken, getEstablishmentServices);
router.get('/:code/specialties', verifyToken, getEstablishmentSpecialties);
router.get('/:code/destiny-services', verifyToken, getEstablishmentDestinyServices);
router.get('/:id', getEstablishmentById);

export default router;