import React, { useState } from 'react';
import { Plus, Eye, Pencil, Trash2 } from 'react-icons/fa'; // Usamos react-icons para los íconos

const Facturas = () => {
  // Datos de facturas de ejemplo
  const [filteredFacturas, setFilteredFacturas] = useState([
    {
      id: 1,
      numero: 'FAC001',
      cliente: 'Juan Pérez',
      fecha: '2024-10-01',
      monto: 1000,
      estado: 'Pagada',
    },
    {
      id: 2,
      numero: 'FAC002',
      cliente: 'Maria López',
      fecha: '2024-09-15',
      monto: 500,
      estado: 'Pendiente',
    },
    // Más facturas aquí...
  ]);

  return (
    <main className="flex-1 overflow-y-auto p-4">
      {/* Título y botón */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Facturas</h2>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Nueva Factura
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">Número</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">Cliente</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">Fecha</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">Monto</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">Estado</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredFacturas.map((factura) => (
              <tr key={factura.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">{factura.numero}</td>
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">{factura.cliente}</td>
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">{factura.fecha}</td>
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">${factura.monto.toFixed(2)}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      factura.estado === 'Pagada'
                        ? 'bg-green-200 text-green-800'
                        : factura.estado === 'Pendiente'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {factura.estado}
                  </span>
                </td>
                <td>
                  <div className="flex space-x-2">
                    <button className="text-gray-600 hover:text-gray-900">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Facturas;
