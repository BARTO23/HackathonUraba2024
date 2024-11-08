import { useState } from 'react';

// Datos de ejemplo para las instalaciones
const instalacionesIniciales = [
  { id: 1, cliente: "Empresa A", direccion: "Calle 123, Ciudad X", fecha: "2023-05-25", hora: "10:00", tecnico: "Juan Pérez", estado: "Pendiente" },
  { id: 2, cliente: "Empresa B", direccion: "Avenida 456, Ciudad Y", fecha: "2023-05-26", hora: "14:30", tecnico: "María Gómez", estado: "En progreso" },
  { id: 3, cliente: "Empresa C", direccion: "Plaza 789, Ciudad Z", fecha: "2023-05-27", hora: "09:15", tecnico: "Carlos Rodríguez", estado: "Completada" },
  { id: 4, cliente: "Empresa D", direccion: "Bulevar 101, Ciudad W", fecha: "2023-05-28", hora: "11:45", tecnico: "Ana Martínez", estado: "Pendiente" },
  { id: 5, cliente: "Empresa E", direccion: "Paseo 202, Ciudad V", fecha: "2023-05-29", hora: "16:00", tecnico: "Luis Sánchez", estado: "En progreso" },
];

function App() {
  const [instalaciones, setInstalaciones] = useState(instalacionesIniciales);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newInstalacion, setNewInstalacion] = useState({
    cliente: "",
    direccion: "",
    fecha: "",
    hora: "",
    tecnico: "",
    estado: "Pendiente"
  });

  const filteredInstalaciones = instalaciones.filter(instalacion =>
    instalacion.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instalacion.tecnico.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewInstalacion = () => {
    setInstalaciones([...instalaciones, { id: instalaciones.length + 1, ...newInstalacion }]);
    setIsDialogOpen(false);
    setNewInstalacion({
      cliente: "",
      direccion: "",
      fecha: "",
      hora: "",
      tecnico: "",
      estado: "Pendiente"
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Área de contenido principal */}
      <main className="flex-1 p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar instalaciones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 p-2 border rounded"
          />
          <button
            onClick={() => setIsDialogOpen(true)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Nueva Instalación
          </button>
        </div>

        {/* Tabla de instalaciones */}
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="p-3 border-b">Cliente</th>
              <th className="p-3 border-b">Dirección</th>
              <th className="p-3 border-b">Fecha</th>
              <th className="p-3 border-b">Hora</th>
              <th className="p-3 border-b">Técnico</th>
              <th className="p-3 border-b">Estado</th>
              <th className="p-3 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredInstalaciones.map((instalacion) => (
              <tr key={instalacion.id}>
                <td className="p-3 border-b">{instalacion.cliente}</td>
                <td className="p-3 border-b">{instalacion.direccion}</td>
                <td className="p-3 border-b">{instalacion.fecha}</td>
                <td className="p-3 border-b">{instalacion.hora}</td>
                <td className="p-3 border-b">{instalacion.tecnico}</td>
                <td className="p-3 border-b">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    instalacion.estado === 'Completada' ? 'bg-green-200 text-green-800' :
                    instalacion.estado === 'En progreso' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {instalacion.estado}
                  </span>
                </td>
                <td className="p-3 border-b">
                  <button className="mr-2 p-1 text-blue-600 hover:text-blue-800">
                    Editar
                  </button>
                  <button className="p-1 text-red-600 hover:text-red-800">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal de Nueva Instalación */}
        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4">Programar Nueva Instalación</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Cliente</label>
                  <input
                    type="text"
                    value={newInstalacion.cliente}
                    onChange={(e) => setNewInstalacion({...newInstalacion, cliente: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Dirección</label>
                  <input
                    type="text"
                    value={newInstalacion.direccion}
                    onChange={(e) => setNewInstalacion({...newInstalacion, direccion: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Fecha</label>
                  <input
                    type="date"
                    value={newInstalacion.fecha}
                    onChange={(e) => setNewInstalacion({...newInstalacion, fecha: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Hora</label>
                  <input
                    type="time"
                    value={newInstalacion.hora}
                    onChange={(e) => setNewInstalacion({...newInstalacion, hora: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Técnico</label>
                  <input
                    type="text"
                    value={newInstalacion.tecnico}
                    onChange={(e) => setNewInstalacion({...newInstalacion, tecnico: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleNewInstalacion}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Programar Instalación
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;