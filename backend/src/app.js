// backend/src/app.js
import express from "express";
import cors from "cors";

import userRoutes from "./features/users/user.routes.js";
import authRoutes from "./features/auth/auth.routes.js";
import accessRoutes from "./features/access/access.routes.js";
import groupsRoutes from "./features/groups/groups.routes.js";
import permissionsRoutes from "./features/permissions/permissions.routes.js";


const app = express();

app.use(
    cors({
        origin: [
        "http://grupo5.ricoprogramar.com",
        "http://localhost:5173",
        ],
        credentials: true,
    }),
);

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/access", accessRoutes);
app.use("/api/groups", groupsRoutes);
app.use("/api/permissions", permissionsRoutes);

export default app;