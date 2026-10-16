# Backend

Copiar `.env.example` a `.env` y completar las credenciales locales.
`npm start` inicia Express y conecta con MySQL. Usar preferentemente un usuario
con permiso de lectura sobre la tabla `pruebas`.

`GET /api/pruebas` devuelve `id`, `nombre`, `indicaciones` y `tiempo_ayunas`,
ordenados por `id`, conforme al contrato del frontend en `types/prueba.ts`.
`CORS_ORIGIN` configura el origen del frontend (por defecto `http://localhost:3000`).
Los errores SQL se registran en el servidor y el cliente recibe un mensaje genérico.

El paquete actual corresponde a Express; los archivos Next.js conservados en
este directorio no se ejecutan con sus scripts actuales.

## Migración pendiente

No hay archivos de migración ni esquema SQL versionado. Se necesita confirmar
el esquema actual y el cambio deseado para preparar una migración específica.
Estos cambios no crean ni alteran tablas. No se ejecutó ninguna migración.
