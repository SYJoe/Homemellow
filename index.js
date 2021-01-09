import mysql from 'mysql';
import user from './db/db_access.js';

var connection = mysql.createConnection({
    host     : user.host,
    user     : user.user,
    password : user.password,
    port     : user.port
});
  
connection.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});
  


connection.end();