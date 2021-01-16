import { connectdb, enddb } from './db/db_connect.js';
import { access_storelist } from './store_query.js';
import { user_register } from './user_register.js';
import { user_login } from './user_login.js';

const account = 0; //0 : Account does not exist, 1 : Account exist

connectdb();

if (!account) 
{
    user_register();
}
else 
{
    id = "testid";
    passwd = "testtest";
    user_login(id, passwd);
}

access_storelist();
//enddb();