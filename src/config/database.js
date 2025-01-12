// Connect ke DB (disesuaikan)
const mysql = require('mysql2');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", 
    database: "db_university"
});

module.exports = db.promise();