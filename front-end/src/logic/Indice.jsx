import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoardMain from "../views/DashBoardMain";
import { Pqr } from "../components/Pqr";
import Login from "../views/Login";
import {LandingPage} from '../views/LandingPage'
import Installations from "../components/Installations";
import { Register } from "../views/Register";
import TicketDashboard from "../views/TicketDashboard";
import ClientesDashBoardMain  from "../views/ClientesDashBoardMain";
import FacturasDashBoardMain  from "../views/FacturasDashBoardMain";



export const Indice = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Ruta de LOGIN Y REGISTER */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas de ADMIN */}
        <Route path="/admin" element={<DashBoardMain />} />
        <Route path="/facturas" element={<FacturasDashBoardMain />} />
        <Route path="/clientes" element={<ClientesDashBoardMain />} />
        <Route path="/ticket" element={<TicketDashboard />} />
        <Route path="/pqr" element={<Pqr />} />
        <Route path="/installations" element={<Installations />} />

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<Navigate to="/login" replace />} />

        {/* Ruta de inicio */}  
        <Route path="/home" element={<LandingPage />} />

        {/* Ruta de cliente */}  
        
      </Routes>
    </BrowserRouter>
  );
};