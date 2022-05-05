import { Router } from "express";
import { getDepartments, getDistrictsByProvinceId, getProvincesByDepartmentId } from "../controllers/ubigeo.controller";

const router = Router();

router.get('/departments', getDepartments);
router.get('/provinces', getProvincesByDepartmentId);
router.get('/districts', getDistrictsByProvinceId);

export default router;