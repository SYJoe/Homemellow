import express from 'express';
import bodyParser from 'body-parser';

export var app = express();

export function connect() 
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(3000, 'localhost', function () {
        console.log('Connecting...');
    });
}
