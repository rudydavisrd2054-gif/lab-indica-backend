"use client";
import { useState, useEffect } from "react";
import ListaPruebas from "../components/ListaPruebas";
import PanelHorarios from "../components/PanelHorarios";
import { FlaskConical } from "lucide-react";

interface Prueba {
  id: number;
  nombre: string;
  indicaciones: string;
  tiempo_ayunas: string | null;
}

export default function PaginaPrincipal() {
  const [pruebas, setPruebas] = useState<Prueba[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/pruebas")
      .then((res) => res.json())
      .then((data) => {
        setPruebas(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) return <div className="p-6 text-center">Cargando...</div>;

  return (
    <div className="min-h-screen bg-sky-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* ===== FILA PRINCIPAL: LOGO — TÍTULO — HORARIOS ===== */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Logo Izquierda */}
          <div className="flex-shrink-0">
            <img
              src="/logocallao.png"
              alt="Gobierno Regional del Callao"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Título Centro */}
          <div className="flex-1 text-center">
            <h1 className="titulo-principal flex items-center justify-center gap-3 text-xl md:text-3xl">
              <FlaskConical size={32} className="text-blue-800" />
              Indicaciones de Laboratorio
            </h1>
          </div>

          {/* Horarios Derecha — Ancho suficiente */}
          <div className="flex-shrink-0 w-[420px]">
            <PanelHorarios />
          </div>
        </div>

        {/* ===== TARJETAS ABAJO ===== */}
        <ListaPruebas pruebas={pruebas} />
      </div>
    </div>
  );
}
