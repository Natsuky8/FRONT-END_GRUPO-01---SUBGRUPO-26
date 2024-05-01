const express = require('express');
const app = express();

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Manejar la ruta para la página de administrador
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin/admin.html');
});
