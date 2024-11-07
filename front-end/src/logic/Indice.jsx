import React from "react";
import DashBoardMain from "../views/DashBoardMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Facturas from "../components/Facturas";
import { Pqr } from "../components/Pqr";

export const Indice = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoardMain />} />
        <Route path="/clientes" element={<DashBoardMain />} />
        <Route path="/facturas" element={<Facturas />} />
        <Route path="/pqr" element={<Pqr />} />
      </Routes>
    </BrowserRouter>
  );
};
