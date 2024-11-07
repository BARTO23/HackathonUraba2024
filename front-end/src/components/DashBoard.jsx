import Card from "./Card";
import { Activity } from "./Activity";
export const DashBoard = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Clientes Totales */}
        <Card
          title="Clientes Totales"
          value="1,234"
          percentageChange="+20% desde el último mes"
        />

        {/* Facturas Pendientes */}
        <Card
          title="Facturas Pendientes"
          value="56"
          percentageChange="-5% desde la última semana"
        />

        {/* PQR Abiertos */}
        <Card
          title="PQR Abiertos"
          value="12"
          percentageChange="+10% desde ayer"
        />

        {/* Instalaciones Programadas */}
        <Card
          title="Instalaciones Programadas"
          value="8"
          percentageChange="+3% desde el mes pasado"
        />
      </div>
      <Activity />
    </main>
  );
};
