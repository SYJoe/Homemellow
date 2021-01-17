import { access } from './db/db_connect.js';
import { app } from './express.js';

export function user_login() {
    app.post('/users', function (req, res) {
        console.log(req.body);
        var userId = req.body.id;
        var userPasswd = req.body.passwd;

        var sql = 'select * from users where email = ?';

        connection.query(sql, userId, function (err, result) {
            var message = '에러가 발생했습니다';

            if (err) {
                console.log(err);
            } else {
                if (result.length === 0) {
                    message = '존재하지 않는 계정입니다!';
                } else if (userPasswd !== result[0].UserPasswd) {
                    message = '비밀번호가 틀렸습니다!';
                } else {
                    message = '로그인 성공! ' + result[0].UserName + '님 환영합니다!';
                }
            }

            res.json({
                'message': message
            });
        })
    });
}