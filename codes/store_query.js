import { access } from './db/db_connect.js';
import { app } from './express.js';

export function access_storelist() {
    app.post('/store', function (req, res) {
        console.log(req.body);
        var name = req.body.name;
        var cost = req.body.cost;
        var stock = req.body.stock;
        var web_link = req.body.web_link;
        var img = req.body.img;

        var sql = 'select * from store';

        connection.query(sql, function (err, result) {
            var message = '에러가 발생했습니다';

            if (err) 
            {
                console.log(err);
            } 
            else 
            {
                res.json({
                    'name' : name,
                    'cost' : cost,
                    'stock' : stock,
                    'web_link' : web_link,
                    'image' : img
                });
            }
        })
    });
}