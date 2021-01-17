import { connect } from './express.js';
import { access_storelist } from './store_query.js';
import { user_register } from './user_register.js';
import { user_login } from './user_login.js';

const account = 0; //0 : Account does not exist, 1 : Account exist

connect();

if (!account) 
{
    user_register();
}
else 
{
    user_login();
}

access_storelist();
//enddb();