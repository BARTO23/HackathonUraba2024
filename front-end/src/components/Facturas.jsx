import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Facturas = () => {
  const [filteredFacturas, setFilteredFacturas] = useState([
    {
      id: 1,
      numero: "FAC001",
      cliente: "Juan Pérez",
      fecha: "2024-10-01",
      monto: 1000,
      estado: "Pagada",
    },
    {
      id: 2,
      numero: "FAC002",
      cliente: "Maria López",
      fecha: "2024-09-15",
      monto: 500,
      estado: "Pendiente",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newFactura, setNewFactura] = useState({
    numero: "",
    cliente: "",
    fecha: "",
    monto: "",
    estado: "Pendiente",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingFactura, setEditingFactura] = useState(null);

  const handleAddFactura = () => {
    const newFacturaData = {
      ...newFactura,
      id: filteredFacturas.length + 1,
    };
    setFilteredFacturas([...filteredFacturas, newFacturaData]);
    setNewFactura({ numero: "", cliente: "", fecha: "", monto: "", estado: "Pendiente" });
    setIsFormOpen(false);
  };

  const handleEditFactura = (factura) => {
    setEditingFactura(factura);
    setNewFactura(factura); // Populate form with current factura data
    setIsFormOpen(true);
    setIsEditing(true);
  };

  const handleUpdateFactura = () => {
    setFilteredFacturas(
      filteredFacturas.map((factura) =>
        factura.id === editingFactura.id ? newFactura : factura
      )
    );
    setNewFactura({ numero: "", cliente: "", fecha: "", monto: "", estado: "Pendiente" });
    setIsFormOpen(false);
    setIsEditing(false);
  };

  const handleDeleteFactura = (id) => {
    setFilteredFacturas(filteredFacturas.filter((factura) => factura.id !== id));
  };

  const descargarPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toISOString().split("T")[0];
    doc.text("Facturas", 20, 10);
    doc.text(`Fecha: ${currentDate}`, 20, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Número", "Cliente", "Fecha", "Monto", "Estado"]],
      body: filteredFacturas.map((factura) => [
        factura.numero,
        factura.cliente,
        factura.fecha,
        `$${factura.monto.toFixed(2)}`,
        factura.estado,
      ]),
    });

    doc.save(`Facturas_${currentDate}.pdf`);
  };

  return (
    <main className="flex-1 overflow-y-auto p-4">
      {/* Título y botones */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Facturas
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={descargarPDF}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Descargar Facturas
          </button>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <CiSquarePlus className="mr-2 h-4 w-4" /> Nueva Factura
          </button>
        </div>
      </div>

      {/* Formulario para agregar o editar factura */}
      {isFormOpen && (
        <div className="mb-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <input
            type="text"
            placeholder="Número de Factura"
            className="block w-full p-2 mb-2 border rounded"
            value={newFactura.numero}
            onChange={(e) => setNewFactura({ ...newFactura, numero: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cliente"
            className="block w-full p-2 mb-2 border rounded"
            value={newFactura.cliente}
            onChange={(e) => setNewFactura({ ...newFactura, cliente: e.target.value })}
          />
          <input
            type="date"
            placeholder="Fecha"
            className="block w-full p-2 mb-2 border rounded"
            value={newFactura.fecha}
            onChange={(e) => setNewFactura({ ...newFactura, fecha: e.target.value })}
          />
          <input
            type="number"
            placeholder="Monto"
            className="block w-full p-2 mb-2 border rounded"
            value={newFactura.monto}
            onChange={(e) => setNewFactura({ ...newFactura, monto: parseFloat(e.target.value) })}
          />
          <select
            className="block w-full p-2 mb-2 border rounded"
            value={newFactura.estado}
            onChange={(e) => setNewFactura({ ...newFactura, estado: e.target.value })}
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Pagada">Pagada</option>
            <option value="Vencida">Vencida</option>
          </select>
          <button
            onClick={isEditing ? handleUpdateFactura : handleAddFactura}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isEditing ? "Actualizar Factura" : "Agregar Factura"}
          </button>
        </div>
      )}

      {/* Tabla de facturas */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">
                Número
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">
                Cliente
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-white">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredFacturas.map((factura) => (
              <tr
                key={factura.id}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">
                  {factura.numero}
                </td>
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">
                  {factura.cliente}
                </td>
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">
                  {factura.fecha}
                </td>
                <td className="px-6 py-3 text-sm text-gray-800 dark:text-white">
                  ${factura.monto.toFixed(2)}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      factura.estado === "Pagada"
                        ? "bg-green-200 text-green-800"
                        : factura.estado === "Pendiente"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {factura.estado}
                  </span>
                </td>
                <td>
                  <div className="flex space-x-2">
                    <button className="text-gray-600 hover:text-gray-900">
                      <FaEye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleEditFactura(factura)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaPencilAlt className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteFactura(factura.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaRegTrashAlt className="h-4 w-4" />
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
