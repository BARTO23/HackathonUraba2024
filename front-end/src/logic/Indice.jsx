import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoardMain from "../views/DashBoardMain";
import Facturas from "../components/Facturas";
import { Pqr } from "../components/Pqr";
import Login from "../views/Login";
import {LandingPage} from '../views/LandingPage'
import Installations from "../components/Installations";

export const Indice = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Ruta de LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* Rutas de ADMIN */}
        <Route path="/dashboard" element={<DashBoardMain />} />
        <Route path="/facturas" element={<Facturas />} />
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