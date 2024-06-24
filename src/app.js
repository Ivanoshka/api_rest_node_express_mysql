const express = require('express');
const config = require('./config.js');

const clientes = require('./modulos/clientes/rutas.js');

const app = express();

//llamamos al app.port de el archivo config.js
app.set('port', config.app.port)

//creamos las rutas
app.use('/api/clientes', clientes)


module.exports = app;