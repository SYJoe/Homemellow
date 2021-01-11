import { connectdb, enddb } from './db/db_connect.js';
import { access_storelist } from  './store_query.js';

connectdb();
access_storelist();
enddb();
