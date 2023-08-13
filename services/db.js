


const UserModel = require('../models/user.js');

const mysql = require('mysql2') ;

 

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'unicredit', 
    password: 'rootuser'
  });
   
UserModel.createUserTable();


module.exports = pool