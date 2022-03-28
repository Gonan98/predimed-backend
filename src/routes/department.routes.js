import { Router } from "express";
import { getDepartments } from "../controllers/department.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.get('/', verifyToken, getDepartments);

export default router;