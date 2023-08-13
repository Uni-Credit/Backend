const pool = require("../services/db");




class UserModel {


    static returnUsersCadastrated(){ 
        // ´pool.query
    }

    static loginUser(credentials, callback){
        
        pool.query(`
            SELECT * FROM Cliente 
            WHERE Matricula = ${credentials.matricula} AND Senha = ${credentials.password}
        `,callback );
    }


    static registerUser(userInformation, callback){
        
        pool.query(`
           INSERT INTO Cliente (Nome, Email, Senha, Matricula)
           VALUES ${userInformation.name}, ${userInformation.email},
           ${userInformation.password},
           ${userInformation.matricula},
        `, callback);
    }



    static createUserTable() {
        pool.query(`
        CREATE TABLE IF NOT EXISTS Cliente (
            ID_USER INT PRIMARY KEY,
        Nome VARCHAR(100),
        Email VARCHAR(100),
        Senha VARCHAR(50),
        Matricula VARCHAR(6),
    )
        `);
    }
    
}

module.exports = UserModel