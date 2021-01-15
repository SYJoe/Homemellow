import { connection } from './db/db_connect.js';

export function user_register(email, id, passwd, name, hp_num) {
    var userEmail = email;
    var userId = id;
    var userPasswd = passwd;
    var userName = name;
    var userHPNum = hp_num;

    var sql = 'INSERT INTO users (email, id, passwd, name, hp_num) VALUES (?, ?, ?, ?, ?)';
    var params = [userEmail, userId, userPasswd, userName, userHPNum];

    connection.query(sql, params, function (err) {
        var message = '에러가 발생했습니다';

        if (err) 
        {
            console.log(err);
        } 
        else 
        {
            message = '회원가입에 성공했습니다.';
        }

        console.log(message);
    });
}