import { connectdb, enddb } from './db/db_connect.js';
import { access_storelist } from './store_query.js';
import { user_register } from './user_register.js';
import { user_login } from './user_login.js';

const account = 1; //0 : Account does not exist, 1 : Account exist
var email, id, passwd, name, hp_num;

connectdb();

if (!account) 
{
    email = "test@test.com";
    id = "testid";
    passwd = "testtest";
    name = "testname";
    hp_num = "010010101010";

    user_register(email, id, passwd, name, hp_num);
}
else 
{
    id = "testid";
    passwd = "testtest";
    user_login(id, passwd);
}
//access_storelist();
//enddb();