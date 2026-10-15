// Importamos express, el framework base para construir  el servidor HTTP
import express from "express";

// Importamos el middleware CORS 
// Permite controlar que origenes pueden comunicarse  con el backend
import cors from "cors";

// Importamos las rutas del feature users
// cada feature expone su propio router independiente
import userRoutes from "./features/users/user.routes.js"
import authRoutes from "./features/auth/auth.routes.js";

// creamos la instancia principal de la aplicación Express
const app=express();

// ]middleware de cors
// Permite solicitudes únicamente desde el frontend en localhost: 5173
// (típico proyecto vite en desarrollo)
app.use(cors({ origin: "http://localhost:5173"}));

// middleware para parsear cuerpos de petición en formatos JSON
// Sin este middleware, req.body seria undefined
app.use(express.json());

// registro del router de usuarios
// todas las rutas del feature users quedaran bajo el prefijjo /api/users
// ejemplo final: POST http://localhost:4000/api/users
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); 

// exportamos la aplicación configurada 
// El arranque del servidor se hace en server.js
export default app;