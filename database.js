var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "relogio1",
    database: "demanda"
});

module.exports = con;

