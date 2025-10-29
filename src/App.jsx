import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Destinasi from "./pages/Destinasi.jsx";
import Ulasan from "./pages/Ulasan.jsx";
import Itinerary from "./pages/Itinerary.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/destinasi" element={<Destinasi />} />
      <Route path="/ulasan" element={<Ulasan />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/detail/:id" element={<Detail />} /> 
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}