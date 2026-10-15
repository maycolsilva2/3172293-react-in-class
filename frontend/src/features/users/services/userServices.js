// URL base del endpoint de usuario en el backend
// en producción debería provenir de variables de entorno
// const API_URL = "http://localhost:4000/api/users";

import { API_URL } from "@/features/config";


const USERS_URL = `${API_URL}/users`;

// Función para crear un usuario en el backend 
// recibe un objeto con los datos del usuario
// retorna la respuesta JSON del servidor
export async function createUser(userData){
 
    // Metodo HTTP usando fetch
    const response = await fetch(USERS_URL, {
        // Metodo HTTP usando REST
        method: "POST",

        // Cabeceras de la petición 
        // indicamos que enviamos JSON
        headers: {
            "Content-Type": "application/json",
        },

        // convertimos el objeto userData a JSON
        body: JSON.stringify(userData)
        
    })

    //verificamos si la respuesta NO fue exitosa  (status != 2xx)
    if (!response.ok){
        // leemos el cuerpo de la respuesta de error
        const error = await response.json();

        // lanzamos una excepción con el mensaje de error
        // Esto permite que el componente que llame maneje el error con try/catch
        throw new Error (error.error || "error al crear usuario")

    } 
    // si la petición fue exitosa retornamnos la respueesta parseada como JSON
    return response.json();
}