//este archivo es para hacer todas las consultas

const db = require('../../../DB/mysql.js');

const TABLA = 'clientes'

function todos () {
    return db.todos(TABLA);
}

module.exports = {
    todos,
}