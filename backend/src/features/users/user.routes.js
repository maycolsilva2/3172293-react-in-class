// backend/src/features/users/user.routes.js
import { Router } from "express";
import { userController } from "./user.controller.js";
import { authenticateToken } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post(
    "/",
    // authenticateToken,
    userController.create,
);

export default router;