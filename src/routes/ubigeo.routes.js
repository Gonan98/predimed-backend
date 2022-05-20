import { Router } from "express";
import {
  getDepartments,
  getDistrictById,
  getDistrictsByProvinceId,
  getEstablishmentsByUbigeo,
  getPatientsByUbigeo,
  getProvincesByDepartmentId,
} from "../controllers/ubigeo.controller";

const router = Router();

router.get("/departments", getDepartments);
router.get("/departments/:departmentId/provinces", getProvincesByDepartmentId);
router.get("/provinces/:provinceId/districts", getDistrictsByProvinceId);
router.get("/:id", getDistrictById);
router.get("/:id/establishments", getEstablishmentsByUbigeo);
router.get("/:id/patients", getPatientsByUbigeo);

export default router;