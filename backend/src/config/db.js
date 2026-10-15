// Importamos el paquete "pg" usando el sistema de moodulos ES.// Importamos el paquete SQL para node.js
import pkg from "pg";

// Extraemos la clase pool desde el paquete
// pool gestiona un conjunto de conxiones reutilizables a la DB.


const { Pool } = pkg;

// Importamos dotenv para poder leer vaiables de entorno desde un archivo .env
import dotenv from "dotenv";
dotenv.config();

// creamos y exportamos una instancia unica del pool de postgreSQL
// Esta instancia se reutiliza en toda la aplicacoón
export const pool = new Pool({
    // hhost donde se encuentra postgreSQL (ej: localhost o IP del  servidor)
    host: process.env.DB_HOST,

    // puerto donde escucha postgreSQL (por defecto 5432)
    port: process.env.DB_PORT,

    // Usuario con permisos sobre la base de datos
    user: process.env.DB_USER,

    // Contraseña del usuario
    password: process.env.DB_PASSWORD,

    // Nombre de la base de datos a la que nos conectamos
    database: process.env.DB_NAME,

    // Número máximo de conexiones activas en el pool
    max: 10,

    // tiempo maximmo (en ms) que unna conexión pued estar inactiva
    // antes de ser cerrada automaticamente
    idleTimeoutMillis: 30000,
});

// Evento que se dispara cada vez que el pool establece una conexion
// Útil para logs y verificación de desarrollo
pool.on("connect", () => {
    console.log("Conectado a POstgreSQL");
});

// Evento que se dispara cuando ocurre un error en el pool
// Importante para monitores y diagnostico de fallos
pool.on("error", (err) => {
    console.error("Error en el pool de PostgreSQL", err);
})