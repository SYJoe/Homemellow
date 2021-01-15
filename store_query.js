import { query } from 'express';
import { connection } from './db/db_connect.js';

function querydb(ColumnData)
{
    connection.query(ColumnData, function (err, data) {
        if(err)
        {
            console.log(err);
        }
        console.log('outputData', data);
    });
}

export function access_storelist()
{
    var store = 'SELECT name FROM store';
    querydb(store);

    store = 'SELECT img FROM store';
    querydb(store); 
}