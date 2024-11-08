import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';

const tickets = [
  {
    id: 1,
    service: 'Internet',
    status: 'active',
    createdAt: '2023-05-15T10:00:00Z',
  },
  {
    id: 2,
    service: 'Desarrollo de Software',
    status: 'pending',
    createdAt: '2023-05-14T14:30:00Z',
  },
  {
    id: 3,
    service: 'Instalación CCTV',
    status: 'closed',
    createdAt: '2023-05-13T09:15:00Z',
  },
  {
    id: 4,
    service: 'Desarrollo de Hardware',
    status: 'active',
    createdAt: '2023-05-12T16:45:00Z',
  },
];

const statusColors = {
  active: 'bg-green-500',
  pending: 'bg-yellow-500',
  closed: 'bg-gray-500',
};

export const ClientTickets = () => {
  const [filter, setFilter] = useState('all');

  const filteredTickets = tickets.filter(
    (ticket) => filter === 'all' || ticket.status === filter
  );

  return (
    <section className="container mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Mis Tickets</h2>
        <div className="relative">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="w-[180px] p-2 border border-gray-300 rounded-md"
          >
            <option value="all">Todos</option>
            <option value="active">Activos</option>
            <option value="pending">Pendientes</option>
            <option value="closed">Cerrados</option>
          </select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTickets.map((ticket) => (
          <div key={ticket.id} className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{ticket.service}</h3>
              <span className={`py-1 px-3 text-white rounded-full ${statusColors[ticket.status]}`}>
                {ticket.status === 'active' && 'Activo'}
                {ticket.status === 'pending' && 'Pendiente'}
                {ticket.status === 'closed' && 'Cerrado'}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <CalendarDays className="mr-2 h-4 w-4" />
              Creado el {new Date(ticket.createdAt).toLocaleDateString()}
            </div>
            <div className="mt-4">
              <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/80">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredTickets.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No se encontraron tickets con el filtro seleccionado.</p>
      )}
    </section>
  );
};


