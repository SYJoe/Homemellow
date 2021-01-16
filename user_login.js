import { access } from './db/db_access.js';

export function user_login(id, passwd) {
    var userId = id;
    var userPasswd = passwd;

    var sql = 'SELECT * FROM users where id = ?';

    access.query(sql, userId, function (err, data) {
        var message = '에러가 발생했습니다';

        if (err) 
        {
            console.log(err);
        } 
        else 
        {
            if (data.length === 0) {
                message = '존재하지 않는 계정입니다.';
            } else if (userPasswd !== data[0].passwd) {
                message = '비밀번호가 틀렸습니다.';
            } else {
                message = '로그인 성공';
            }
        }

        console.log(message);
    });
}