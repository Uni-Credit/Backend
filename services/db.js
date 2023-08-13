


const CreditModel = require('../models/credit.js');
const ProviderModel = require('../models/provider.js');
const UserModel = require('../models/user.js');

const mysql = require('mysql2') ;
const AdminModel = require('../models/ãdmin.js');

 

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'unicredit', 
    password: 'rootuser'
  });
   
UserModel.createUserTable();
CreditModel.createCreditModel();

ProviderModel.createCreditModel();
AdminModel.createAdminTable();

module.exports = pool