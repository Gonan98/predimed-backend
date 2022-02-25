import { Router } from "express";
import { myProfile, signIn, signUp } from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/authentication";

const router = Router();

router.post('/register', signUp);
router.post('/login', signIn);
router.get('/profile', verifyToken, myProfile);

export default router;