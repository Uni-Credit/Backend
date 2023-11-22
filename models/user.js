const promisePool = require("../services/db");
 




class UserModel {


    static async returnUsersCadastrated(){ 
        // ´pool.query
    }

    static async loginUser(credentials){
        
        return await promisePool.query(`
            SELECT * FROM Cliente 
            WHERE Matricula = ${credentials.matricula} AND Senha = 
            "${credentials.password}"
        ` ); 
    }


    static async registerUser(userInformation){
        
        return await promisePool.query(`
           INSERT INTO Cliente (Nome, Email, Senha, Matricula)
           VALUES ("${userInformation.name}", "${userInformation.email}",
           "${userInformation.password}", 
           "${userInformation.matricula}")
        `);
    }



    static createUserTable() {

//        promisePool.query("DROP TABLE Credito");  
        
  //      promisePool.query("DROP TABLE Cliente"); 
        
        promisePool.query(`
        CREATE TABLE IF NOT EXISTS Cliente (
            ID_USER INT PRIMARY KEY AUTO_INCREMENT,
        Nome VARCHAR(100),
        Email VARCHAR(100),
        Senha VARCHAR(50),
        Matricula VARCHAR(6)
    )
        `);
    }
    
}

module.exports = UserModel