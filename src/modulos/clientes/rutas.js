const express = require('express');

//importamos respuestas
const respuesta  = require('../../red/respuestas.js');


const router = express.Router();

//hacemos peticion
router.get('/',function (req,res) {
    respuesta.success(req,res,'Todo Ok', 200)
});

module.exports = router; 