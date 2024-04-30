// .express.js

const express = require('express');
const app = express();

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Manejar la ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Manejar la ruta para la página de administrador
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin/admin.html');
});

app.get('/services/services.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services', 'services.html'));
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
