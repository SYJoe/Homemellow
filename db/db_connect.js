import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';

export var app = express();

export function connectdb() 
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(3000, 'localhost', function () {
        console.log('서버 실행 중...');
    });
}

export function enddb() {
    user_data.end();
    console.log('Disconnected.');
}
