const express = require('express');

//importamos respuestas
const respuesta  = require('../../red/respuestas.js');

//importamos controlador.js
const controlador = require('./controlador.js');

const router = express.Router();

//hacemos respuesta 
router.get('/',function (req,res) {
    //accedemos a los datos de la BD
    const todos = controlador.todos()
    .then((items) => {
        respuesta.success(req,res,items, 200)

    });

});

module.exports = router; 