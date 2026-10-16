require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.disable('x-powered-by');
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json({ limit: '100kb' }));

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'lab_indicaciones',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 100
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
  } else {
    connection.release();
    console.log('✅ Conectado correctamente a la base de datos');
  }
});

app.get('/api/pruebas', (req, res) => {
  db.query('SELECT id, nombre, indicaciones, tiempo_ayunas FROM pruebas ORDER BY id', (err, results) => {
    if (err) {
      console.error('Error al consultar pruebas:', err);
      return res.status(500).json({ error: 'No se pudieron obtener las pruebas.' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
