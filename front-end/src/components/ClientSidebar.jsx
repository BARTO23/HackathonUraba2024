import React, { useState } from 'react';
import { Home, Briefcase, Ticket, FileText, LogOut } from 'lucide-react';

const ClientSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: <Home className="h-4 w-4" />, label: 'Inicio', href: '/' },
    { icon: <Briefcase className="h-4 w-4" />, label: 'Servicios', href: '/servicios' },
    { icon: <Ticket className="h-4 w-4" />, label: 'Tickets', href: '/tickets' },
    { icon: <FileText className="h-4 w-4" />, label: 'Peticiones', href: '/peticiones' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen"> {/* Ensure the container takes the full height */}
      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 bg-gray-800 text-white h-screen flex flex-col"> {/* Sidebar takes full screen height */}
          <div className="px-4 py-2 text-lg font-semibold border-b border-gray-700">
            Panel de Cliente
          </div>
          <div className="flex-1 px-4 py-2">
            <ul className="flex flex-col justify-start h-full"> {/* Align links at the top */}
              {menuItems.map((item) => (
                <li key={item.href} className="mb-4">
                  <a href={item.href} className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded-md">
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
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
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100">
        <header className="flex items-center h-14 border-b px-4">
          <button onClick={toggleSidebar} className="text-gray-700">
            {isSidebarOpen ? 'Cerrar Menú' : 'Abrir Menú'}
          </button>
        </header>
        <main className="p-4">
          <h1 className="text-2xl font-bold">Bienvenido al Panel de Cliente</h1>
        </main>
      </div>
    </div>
  );
};

export default ClientSidebar;
