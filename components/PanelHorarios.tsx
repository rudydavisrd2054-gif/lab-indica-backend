export default function PanelHorarios() {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-sm">
      <h3 className="font-bold text-sky-800 mb-3">
        🕐 Horarios del Laboratorio
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {/* Columna IZQUIERDA: Horarios */}
        <div>
          <p className="mb-2 text-gray-800">
            <strong>Toma de muestras</strong>
            <br />
            7:30 a.m. — 9:00 a.m.
          </p>
          <p className="mb-3 text-gray-800">
            <strong>Atención al público</strong>
            <br />
            7:30 a.m. — 5:00 p.m.
          </p>
          <p className="text-amber-900 font-medium text-xs">
            ⚠️ Llegar antes de las 9:00 a.m. si tu estudio requiere ayuno
          </p>
        </div>

        {/* Columna DERECHA: Ubicación y Contacto */}
        <div>
          <p className="mb-3 text-gray-800">
            📍 <strong>Ubicación</strong>
            <br />
            Tu dirección aquí
          </p>
          <p className="text-gray-800">
            📞 <strong>Contacto</strong>
            <br />
            Tu teléfono aquí
          </p>
        </div>
      </div>
    </div>
  );
}
