import React from 'react';
import { CalendarDays, CreditCard, DollarSign, User } from 'lucide-react';

const ClientInfo = () => {
  // Datos del usuario (simulados)
  const user = {
    name: "María García",
    email: "maria.garcia@ejemplo.com",
    role: "Cliente",
    joinDate: "15 de Mayo, 2023",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
  };

  const recentActivity = [
    { id: 1, description: "Ticket #1234 actualizado", date: "Hace 2 horas" },
    { id: 2, description: "Nueva petición creada", date: "Ayer" },
    { id: 3, description: "Servicio contratado: Soporte Premium", date: "Hace 3 días" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bienvenido/a, {user.name}</h1>

      {/* Estadísticas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Tickets Abiertos</p>
            <CreditCard className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">+1 desde el mes pasado</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Servicios Activos</p>
            <DollarSign className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">Sin cambios desde el mes pasado</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Peticiones Pendientes</p>
            <User className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-gray-500">-2 desde el mes pasado</p>
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <p className="text-sm font-medium">Días como Cliente</p>
            <CalendarDays className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">73</div>
            <p className="text-xs text-gray-500">+73 desde que se unió</p>
          </div>
        </div>
      </div>

      {/* Información del Usuario y Actividad Reciente */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <div className="bg-white p-4 shadow-lg rounded-lg col-span-2">
          <div>
            <h2 className="text-xl font-semibold">Información del Usuario</h2>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xl font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Rol:</p>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Fecha de registro:</p>
                <p className="text-sm text-gray-500">{user.joinDate}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="border border-gray-500 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Editar Perfil
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div>
            <h2 className="text-xl font-semibold">Actividad Reciente</h2>
            <p className="text-sm text-gray-500">Has tenido 3 actividades en los últimos 3 días</p>
          </div>
          <div>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
