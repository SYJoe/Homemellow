import { app } from './express.js';
import { access } from './db/db_connect.js'

export function user_register() {
    console.log("register");
    app.post('/users', function (req, res) {
        console.log(req.body);
        var userEmail = req.body.email;
        var userId = req.body.id;
        var userPasswd = req.body.passwd;
        var userName = req.body.name;
        var userHPNum = req.body.hp_num;

        var sql = 'INSERT INTO users (email, id, passwd, name, hp_num) VALUES (?, ?, ?, ?, ?)';
        var params = [userEmail, userId, userPasswd, userName, userHPNum];

        access.query(sql, params, function (err) {
            var message = '에러가 발생했습니다';

            if (err) {
                console.log(err);
            }
            else {
                message = '회원가입에 성공했습니다.';
            }

            console.log(message);
            res.json({
                'message': message
            });
        });
    });
}