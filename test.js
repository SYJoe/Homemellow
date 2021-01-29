const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(80, function () {
    console.log('서버 실행 중...');
});
console.log("test");
var access = mysql.createConnection({
    host: "",
    user: "",
    database: "",
    password: "",
    port: 
});

app.post('/users/register', function (req, res) {
    console.log(req.body);
    var userEmail = req.body.email;
    var userId = req.body.id;
    var userPasswd = req.body.passwd;
    var userName = req.body.name;
    var userHPNum = req.body.hp_num;

    var sql = 'INSERT INTO users (email, id, passwd, name, hp_num) VALUES (?, ?, ?, ?, ?)';
    var params = [userEmail, userId, userPasswd, userName, userHPNum];

    access.query(sql, params, function (err) {
        var message = '에러가 발생했습니다.';

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

app.post('/users/login', function (req, res) {
    console.log(req.body);
    var userEmail = req.body.email;
    var userPasswd = req.body.passwd;

    var sql = "SELECT * FROM users WHERE email = ?";

    access.query(sql, userEmail, function (err, result) {
        var message = '에러가 발생했습니다';

        if (err) {
            console.log(err);
        } else {
            if (result.length === 0) {
                message = '존재하지 않는 계정입니다!';
            } else if (userPasswd !== result[0].passwd) {
                message = '비밀번호가 틀렸습니다!';
            } else {
                message = '로그인 성공! ' + result[0].name + '님 환영합니다!';
            }
        }

        res.json({
            'message': message
        });
    })
});

app.get('/store/index', function (req, res) {

    var sql = "SELECT * FROM store";

    access.query(sql, function (err, result) {
        var message = '에러가 발생했습니다';

        if (err) {
            console.log(err);
        } else {
            message = "store data";
        }

        res.json({
            'message': message,
            'storedata' : result
        });
    })
});
