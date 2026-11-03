import { userRepository } from "./user.repository.js";
import bcrypt from "bcrypt"; 

export const userService = {

    // Método que solicita al repositorio la lista y mapea los campos para el frontend
    async getAllUsers() {
        const users = await userRepository.findAll();
        
        // Mapeamos las propiedades de la BD a camelCase para que la tabla los lea correctamente
        return users.map(user => ({
            id: user.id,
            userName: user.user_name,
            userEmail: user.user_email,
            userPhone: user.user_phone,
            userDocumentTypes: user.user_document_types,
            userDocumentNumber: user.user_document_number,
            isStaff: user.is_staff,
            isActive: user.is_active,
            isSuperuser: user.is_superuser
        }));
    },

    async createUser(data) {
        const rawPassword = data.userPassword || data.user_password || data.password || data.contrasena;

        if (!rawPassword) {
            throw new Error("La contraseña es requerida para el registro");
        }

        const hashedPassword = await bcrypt.hash(rawPassword, 10); 

        const userData = { 
            userName: data.userName || data.user_name || data.name,
            userEmail: data.userEmail || data.user_email || data.email,
            userPhone: data.userPhone || data.user_phone || data.phone,
            userDocumentTypes: data.userDocumentTypes || data.user_document_types || data.documentType,
            userDocumentNumber: data.userDocumentNumber || data.user_document_number || data.documentNumber,
            userPassword: hashedPassword,
            userAvatarUrl: data.userAvatarUrl || data.user_avatar_url || data.avatarUrl || null,
            isStaff: data.isStaff ?? data.is_staff ?? false,
            isActive: data.isActive ?? data.is_active ?? true,
            isSuperuser: data.isSuperuser ?? data.is_superuser ?? false
        };

        console.log("DATOS MAPEADOS Y HASHEADOS ENVIADOS AL REPO:", userData);

        return await userRepository.create(userData);
    },
};