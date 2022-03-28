import { Router } from "express";
import { getProvinces } from "../controllers/province.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.get('/', verifyToken, getProvinces);

export default router;