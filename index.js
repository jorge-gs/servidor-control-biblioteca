const http = require('http');
const https = require('https');
const mysql = require('mysql');
const express = require('express');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'none',
    database: 'biblioteca'
});

db.connect(function(err) {
    if (err) throw err;
    console.log('Conectado!');
})

app.get('/', (req, res) => {
    db.query('SELECT 1 + 1 AS Resultado', function (err, rows, fields) {
        if (err) throw err;
        res.send(JSON.stringify(rows));
    });
});

app.listen(80, function() {
    console.log('Servidor escuchando en el puerto 80');
})