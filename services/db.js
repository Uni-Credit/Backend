


const UserModel = require('../models/user.js');

const mysql = require('mysql') ;
const pool = mysql.createPool( {
    host: 'localhost', 
    user: 'root', 
    password: 'rootuser',

} );

//const DBNAME = 'unicreditdb';

UserModel.createUserTable(pool);



void createProviderTable() {
    pool.query('');
}

