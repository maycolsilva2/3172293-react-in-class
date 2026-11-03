// src/users/pagesUserListPage.js
import { useState, useEffect } from "react";
import { DataTable, Button } from "@/shared";
import { UserColumns } from "../table/UserColumns";
import { Link } from "react-router-dom";
import ReportConfigModal from "../reports/components/ReportConfigModal";
import { getUsers } from "../services/userServices";

export default function UserListPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hook para cargar los usuarios de la base de datos al montar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Listado de Usuarios</h1>

      <div className="flex justify-end items-center gap-4">
        <Button onClick={() => setIsReportModalOpen(true)}>
          Reportar usuario
        </Button>

        <Link to="/dashboard/userCreate" className="text-h1 font-heading">
          <Button>Crear usuario</Button>
        </Link>
      </div>

      {loading ? (
        <p className="mt-4 text-neutral-500">Cargando usuarios de la base de datos...</p>
      ) : (
        <DataTable data={users} columns={UserColumns} />
      )}

      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}