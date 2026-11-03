// src/features/users/table/UserColumns.js

// Componente reutilizable que muestra un switch para activar o desactivar estados
import StatusSwitch from "@/shared/components/StatusSwitch";

// Componente que contiene los botones de acciones (editar y eliminar) para cada usuario
import UserRowActions from "@/features/users/components/UserRowActions";

// Definición de las columnas de la tabla de usuarios
export const UserColumns = [

  // Columna ID
  {
    accessorKey: "id", // Coincide con id
    header: "Id",      
  },

  // Columna Nombre
  {
    accessorKey: "userName", 
    header: "Nombre",   
  },

  // Columna Email
  {
    accessorKey: "userEmail",
    header: "Email",
  },

  // Columna Telefono
  {
    accessorKey: "userPhone",
    header: "Telefono",
  },

  // Columna Estado (activo / inactivo)
  {
    accessorKey: "isActive", // <--- CAMBIADO a isActive (camelCase)
    header: "Estado",

    // Render personalizado de la celda
    cell: ({ row }) => {

      // Se obtiene el objeto completo del usuario de la fila
      const user = row.original;

      // Función que se ejecuta cuando cambia el switch
      const handleChange = (value) => {
        // value representa el nuevo estado del switch (true o false)
        console.log("Actualizar estado usuario:", user.id, value);

        // Aquí llamarás a tu API para actualizar el estado
        // updateUserStatus(user.id, value)
      };

      return (
        // Componente reutilizable para mostrar el switch
        <StatusSwitch
          checked={user.isActive}
          onChange={handleChange}  
        />
      );
    },
  },

  // Columna de acciones (editar / eliminar)
  {
    id: "actions", 
    cell: ({ row }) => <UserRowActions user={row.original} />,
  },
];