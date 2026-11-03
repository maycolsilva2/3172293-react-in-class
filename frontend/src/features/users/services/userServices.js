// frontend/src/features/users/services/userServices.js
import { API_URL } from "@/features/config";

const USERS_URL = `${API_URL}/users`;

/** Función para crear un nuevo usuario (POST)*/
export async function createUser(userData) {
    // Enviar JWT al backend
    const token = sessionStorage.getItem("token");

    const response = await fetch(USERS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error al crear usuario");
    }

    return response.json();
}

/**Función para obtener la lista de usuarios de la BD (GET)*/
export async function getUsers() {
    // Obtener el JWT de sesión para autenticar la petición
    const token = sessionStorage.getItem("token");

    const response = await fetch(USERS_URL, {
        method: "GET", // Método GET para listar
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error al obtener la lista de usuarios");
    }

    return response.json();
}