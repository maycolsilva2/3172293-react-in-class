// Imporamos el pool de conexion a postgreSQL
import { pool } from "../../config/db.js";

export const userRepository = {

    // Método para consultar todos los usuarios de la base de datos
    async findAll() {
        const query = "SELECT * FROM public.users";
        const result = await pool.query(query);
        return result.rows; // Retorna todas las filas obtenidas
    },

    // Metodo encargado de crear un nuevo usuario en la base de datos
    async create(userData) {
        const{
            userName,
            userEmail,
            userPhone,
            userDocumentTypes,
            userDocumentNumber,
            userPassword,
            userAvatarUrl,
            isStaff,
            isActive, 
            isSuperuser,
        } =  userData;

        const query = `
            INSERT INTO  users (
                user_name,
                user_email,
                user_phone,
                user_document_types,
                user_document_number,
                user_password,
                user_avatar_url,
                is_staff,
                is_active,
                is_superuser
            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
            RETURNING id;
        `;

        const values = [
            userName,
            userEmail,
            userPhone,
            userDocumentTypes,
            userDocumentNumber,
            userPassword,
            userAvatarUrl,
            isStaff,
            isActive, 
            isSuperuser,
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    },
}