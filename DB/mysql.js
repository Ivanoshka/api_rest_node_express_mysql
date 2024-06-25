const mysql = require('mysql');
const config = require('../src/config.js');

//configuramos base de datos 
const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

//hacemos conexion a la base de datos
function conexionMysql() {
    conexion = mysql.createConnection(dbconfig);

    //if de verificacion de coenxion

    conexion.connect((err) => {
        if (err) {
            console.error('[Error al conectar a la base de datos:]', err);
            setTimeout(conexionMysql, 200);
        } else {
            console.log('Conectado a la base de datos!!');
        }
    });

    // si existe algun error en la conexion
    conexion.on('error', err => {
        console.error('[Error al conectar a la base de datos:]', err);
        //si conexion perdida
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        //intenta conectarte de nuevo
        conexionMysql();
        }else{
            //sino muestra error
            throw err;
        }
    }
    );

}

conexionMysql();


//funciones para API REST
function todos(tabla) {
    //hacemos consulta read
    return new Promise((resolve,reject) => {
        conexion.query(`SELECT * FROM ${tabla}`,(error, result)=> {
            if(error) return reject(error);
            resolve(result);
        })
    })
}

function uno(tabla, id) {

}

function agregar(tabla, data) {

}

function eliminar(tabla, id) {

}


module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}