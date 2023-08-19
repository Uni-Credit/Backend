



const mysql = require('mysql2') ;




const pool =  mysql.createPool({
    host: 'db4free.net',
    port: '3306',
    user: 'root_user123',
    database: 'unicredit', 
    password: 'rootuser123', 
  });


  console.log(pool);

  
  const promisePool = pool.promise();
module.exports = promisePool