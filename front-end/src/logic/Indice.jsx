import React from "react";
import DashBoardMain from "../views/DashBoardMain";
import ClientesDashBoardMain  from "../views/ClientesDashBoardMain";
import FacturasDashBoardMain  from "../views/FacturasDashBoardMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pqr } from "../components/Pqr";
import Login from "../views/Login";


export const Indice = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardMain />} />
        <Route path="/clientes" element={<ClientesDashBoardMain />} />
        <Route path="/facturas" element={<FacturasDashBoardMain />} />
        <Route path="/pqr" element={<Pqr />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
