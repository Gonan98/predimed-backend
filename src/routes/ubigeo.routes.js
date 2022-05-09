import { Router } from "express";
import { getDepartments, getDistrictById, getDistrictsByProvinceId, getProvincesByDepartmentId } from "../controllers/ubigeo.controller";

const router = Router();

router.get('/departments', getDepartments);
router.get('/provinces', getProvincesByDepartmentId);
router.get('/districts', getDistrictsByProvinceId);
router.get('/districts/:id', getDistrictById);

export default router;