import { userService } from "./user.service.js";

export const userController = {

    // Método controlador para manejar la petición GET de listado
    async getAll(req, res) {
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json(users); // Retorna código 200 y los usuarios en JSON
        } catch (err) {
            console.error("ERROR AL LISTAR USUARIOS:", err);
            return res.status(500).json({
                error: err.message,
            });
        }
    },

    // Metodo encargado de manejar la creación de un usuario 
    async create(req, res) {
        console.log("BODY RECIBIDO:", req.body);
        try{
            const user = await userService.createUser(req.body);
            res.status(201).json({
                message: "Usuario creado correctamente",
                userID: user.id,
            })
        }catch (err){
            console.error("ERROR BACKEND:", err);
            res.status(500).json({
                error: err.message,
            });
        }
    }
}