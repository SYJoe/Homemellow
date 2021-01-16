import { query } from 'express';
import { access } from './db/db_access.js';

function querydb(ColumnData)
{
    access.query(ColumnData, function (err, data) {
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