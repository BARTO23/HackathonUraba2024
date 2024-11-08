import React from 'react';
import { SideBar } from "../components/SideBar";
import { Title } from "../components/Title";
import ViewDetalleTecket from '../components/ViewDetalleTecket';

const TicketDashboard = () => {
    const ticket = {
        title: "Problema con la conexión a Internet",
        description: "El usuario no puede conectarse a la red Wi-Fi de la oficina.",
        status: "inProgress",
        history: [
          { date: "2024-11-01", status: "open" },
          { date: "2024-11-02", status: "inProgress" },
          { date: "2024-11-05", status: "closed" },
        ],
        messages: [
          {
            rol: "user",
            author: "Juan Pérez",
            content: "El problema comenzó esta mañana y no he podido trabajar.",
            date: "2024-11-01 08:30",
          },
          {
            rol: "admin",
            author: "Soporte Técnico",
            content: "Estamos investigando el problema.",
            date: "2024-11-01 09:00",
          },
          {
            rol: "admin",
            author: "Soporte Técnico",
            content: "Hemos identificado un problema con el router. Estamos trabajando en una solución.",
            date: "2024-11-02 10:15",
          },
          {
            rol: "user",
            author: "Juan Pérez",
            content: "Gracias por la actualización.",
            date: "2024-11-02 10:30",
          },
        ],
      };

    return (
        <div className="flex flex-col h-screen">
            <Title />
            <div className="flex flex-1">
                <SideBar />
                <ViewDetalleTecket rol={ticket.messages.rol} ticket={ticket} />
            </div>
        </div>
    );
}

export default TicketDashboard;
