"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface Prueba {
  id: number;
  nombre: string;
  indicaciones: string;
  tiempo_ayunas: string | null;
}

export default function PruebaDetalle() {
  const params = useParams();
  const id = params?.id as string;
  const [prueba, setPrueba] = useState<Prueba | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5000/api/pruebas/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPrueba(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <div className="p-6 text-center">Cargando...</div>;
  if (!prueba)
    return <div className="p-6 text-center">Prueba no encontrada</div>;

  const enlaceCompartir =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-sky-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-bold text-sky-800 mb-4">
          {prueba.nombre}
        </h1>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r">
          <p className="font-semibold text-amber-800">⏱️ Tiempo de ayuno:</p>
          <p className="text-amber-900">
            {prueba.tiempo_ayunas || "No requiere"}
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="font-semibold text-gray-700">📋 Indicaciones:</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {prueba.indicaciones}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t text-sm text-gray-500">
          <p>🔗 Enlace único:</p>
          <code className="bg-gray-100 p-2 rounded block mt-1 text-xs break-all">
            {enlaceCompartir}
          </code>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-6 bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition"
        >
          ← Volver a la lista
        </button>
      </div>
    </div>
  );
}
