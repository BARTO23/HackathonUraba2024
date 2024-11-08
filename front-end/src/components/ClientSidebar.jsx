import React, { useState } from 'react';
import { Home, Briefcase, Ticket, FileText, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: <Home className="h-4 w-4" />, label: 'Inicio', to: '/client-main' },
    { icon: <Briefcase className="h-4 w-4" />, label: 'Servicios', to: '/client-services' },
    { icon: <Ticket className="h-4 w-4" />, label: 'Tickets', to: '/client-tickets' },
    { icon: <FileText className="h-4 w-4" />, label: 'Peticiones', to: '/client-request' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block w-64 bg-gray-800 text-white flex flex-col`} // Sidebar visible en pantallas grandes y toggleable en móviles
      >
        <div className="px-4 py-2 text-lg font-semibold border-b border-gray-700">
          Panel de Cliente
        </div>
        <div className="px-4 py-2 flex-1">
          <ul className="flex flex-col justify-start">
            {menuItems.map((item) => (
              <li key={item.to} className="mb-4">
                <Link
                  to={item.to} // Aquí se utiliza `to` para las rutas internas
                  className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 py-2 border-t border-gray-700">
          <button className="w-full text-left flex items-center gap-2 text-gray-400 hover:text-white">
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        <header className="flex items-center h-14 border-b px-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-700 flex items-center" // Botón de toggle en pantallas pequeñas
          >
            {isSidebarOpen ? 'Cerrar Menú' : 'Abrir Menú'}
          </button>
        </header>
      </div>
    </div>
  );
};

export default ClientSidebar;
