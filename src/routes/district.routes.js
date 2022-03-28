import { Router } from "express";
import { getDistricts } from "../controllers/district.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.get('/', verifyToken, getDistricts);

export default router;