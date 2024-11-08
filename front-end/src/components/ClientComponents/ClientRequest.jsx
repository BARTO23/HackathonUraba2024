import React, { useState } from "react";
import { CalendarDays, FileText } from "lucide-react";

const requests = [
  {
    id: "RAD-001",
    subject: "Solicitud de aumento de ancho de banda",
    status: "active",
    createdAt: "2023-05-15T10:00:00Z",
  },
  {
    id: "RAD-002",
    subject: "Cambio de plan de servicio",
    status: "pending",
    createdAt: "2023-05-14T14:30:00Z",
  },
  {
    id: "RAD-003",
    subject: "Reporte de falla en el servicio",
    status: "closed",
    createdAt: "2023-05-13T09:15:00Z",
  },
  {
    id: "RAD-004",
    subject: "Solicitud de información sobre nuevos servicios",
    status: "active",
    createdAt: "2023-05-12T16:45:00Z",
  },
];

const statusColors = {
  active: "bg-green-500",
  pending: "bg-yellow-500",
  closed: "bg-gray-500",
};

const statusLabels = {
  active: "Activo",
  pending: "Pendiente",
  closed: "Cerrado",
};

export const ClientRequest = () => {
  const [filter, setFilter] = useState("all");

  // Filtrar solicitudes según el estado
  const filteredRequests = requests.filter(
    (request) => filter === "all" || request.status === filter
  );

  return (
    <section className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Mis Peticiones</h2>
        {/* Filtro por estado */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          defaultValue="all"
          className="p-2 border rounded-md"
        >
          <option value="all">Todos</option>
          <option value="active">Activos</option>
          <option value="pending">Pendientes</option>
          <option value="closed">Cerrados</option>
        </select>
      </div>

      {/* Mostrar tarjetas de peticiones */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRequests.map((request) => (
          <div
            key={request.id}
            className="border p-4 rounded-lg shadow-md bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">{request.id}</span>
              <span
                className={`text-xs text-white py-1 px-2 rounded-full ${statusColors[request.status]}`}
              >
                {statusLabels[request.status]}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{request.subject}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-2">
              <CalendarDays className="mr-2 h-4 w-4" />
              Creado el {new Date(request.createdAt).toLocaleDateString()}
            </div>
            <div className="mt-4">
              <button
                className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => alert(`Detalles de la solicitud ${request.id}`)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje cuando no hay peticiones que coincidan con el filtro */}
      {filteredRequests.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No se encontraron peticiones con el filtro seleccionado.
        </p>
      )}
    </section>
  );
};
