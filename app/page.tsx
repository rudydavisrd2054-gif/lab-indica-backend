"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Prueba {
  id: number;
  nombre: string;
  indicaciones: string;
  tiempo_ayunas: string | null;
}

export default function PruebasPage() {
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
    <div className="min-h-screen bg-sky-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-sky-800 mb-8">
          📋 Indicaciones de Laboratorio
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          {pruebas.map((prueba) => (
            <Link
              key={prueba.id}
              href={`/prueba/${prueba.id}`}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition border-l-4 border-sky-500"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {prueba.nombre}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                ⏱️ {prueba.tiempo_ayunas || "No requiere ayuno"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
