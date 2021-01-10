import mysql from 'mysql';
import user from './db_access.js';

export default function connectdb()
{
    var connection = mysql.createConnection({
        host     : user.host,
        user     : user.user,
        password : user.password,
        port     : user.port,
        database : user.database
    });
      
    connection.connect(function(err) {
        if (err) {
            return 'Database connection failed: ' + err.stack;
        }
        return 'Connected to database.';
    });
}
export function enddb()
{   
    connection.end();
}