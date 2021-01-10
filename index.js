import db_connect from './db/db_connect.js';
import store from './store_query.js';

var main_connectdb = db_connect.connectdb();
var main_accessstorelist = store.access_storelist();
var main_enddb = db_connect.enddb();