const mysql = require('mysql2');


const pool = mysql.createPool({
    host: 'localhost',
    user: 'Daniel',
    password: '',
    database: 'daniel',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise()


module.exports = pool;
