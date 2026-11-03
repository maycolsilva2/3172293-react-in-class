// backend/src/features/users/user.routes.js
import { Router } from "express";
import { userController } from "./user.controller.js";
import { authenticateToken } from "../../middlewares/auth.middleware.js";

const router = Router();

router.get(
    "/",
    // authenticateToken, // Descoméntalo si requiere autenticación por token
    userController.getAll, 
);

router.post(
    "/",
    // authenticateToken,
    userController.create,
);

export default router;