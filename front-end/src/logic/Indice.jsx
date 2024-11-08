import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoardMain from "../views/DashBoardMain";
import ClientesDashBoardMain  from "../views/ClientesDashBoardMain";
import FacturasDashBoardMain  from "../views/FacturasDashBoardMain";
import { Pqr } from "../components/Pqr";
//import Login from "../views/Login";
import {LandingPage} from '../views/LandingPage'
import Installations from "../components/Installations";


export const Indice = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardMain />} />
        <Route path="/clientes" element={<ClientesDashBoardMain />} />
        <Route path="/facturas" element={<FacturasDashBoardMain />} />
        <Route path="/pqr" element={<Pqr />} />
        <Route path="/installations" element={<Installations />} />

        {/* Ruta para manejar páginas no encontradas */}
        <Route path="*" element={<Navigate to="/login" replace />} />

        {/* Ruta de inicio */}  
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};