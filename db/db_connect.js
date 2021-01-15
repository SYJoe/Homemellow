import mysql from 'mysql';
import { user_data } from './db_access.js';

export var connection = mysql.createConnection({
    host     : user_data.host,
    user     : user_data.user,
    password : user_data.password,
    port     : user_data.port,
    database : user_data.database
});

export function connectdb()
{
    connection.connect(function(err) {
        if (err) {
            console.log('Database connection failed: ' + err.stack);
        }
        console.log('Connected to database.');
    });
}

export function enddb()
{   
    connection.end();
    console.log('Disconnected.');
}