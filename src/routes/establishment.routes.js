import { Router } from "express";
import { getDestinyEstablishments, getEstablishmentById } from "../controllers/establishment.controller";

const router = Router();

router.get('/:id', getEstablishmentById);
router.get('/destiny', getDestinyEstablishments);

export default router;