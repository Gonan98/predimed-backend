import { Router } from "express";
import { addLabExam } from "../controllers/lab-exam.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post("/", verifyToken, addLabExam);