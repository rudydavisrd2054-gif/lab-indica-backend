import Link from "next/link";

interface Prueba {
  id: number;
  nombre: string;
  indicaciones: string;
  tiempo_ayunas: string | null;
}

interface ListaPruebasProps {
  pruebas: Prueba[];
}

export default function ListaPruebas({ pruebas }: ListaPruebasProps) {
  if (pruebas.length === 0) {
    return (
      <p className="text-center text-gray-500">No se encontraron pruebas</p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {pruebas.map((prueba) => (
        <Link
          key={prueba.id}
          href={`/prueba/${prueba.id}`}
          className="tarjeta-prueba"
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
  );
}
