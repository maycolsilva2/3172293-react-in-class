// Importamos la instancia de la aplicación ya configurada.
// app.js debe encargarse de middlewares, rutas y configuracion general.
import app from "./app.js";

// Immportamos dotenv para cargar variables de entorno desde el archivo .env
import dotenv from "dotenv";

// Ejecutamos la carga de variables de entorno

dotenv.config();

// Definimos el puerto del servidor
// se prioriza el valor definido en el entorno(producción)
// y se usa 4000 como valor por defecto del desarrollo
const PORT  = process.env.PORT || 4000;

// Iniciamos el servidor  HTTP usando la app de EXPRESS
// listen levanta el servidor y queda a la espera de peticiones
app.listen(PORT, () => {
    // Log informativo indicando que el servidor esta corriendo
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
})