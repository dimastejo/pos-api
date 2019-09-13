const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'cvs_resto',
    user: 'root',
    password: ''
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = db;