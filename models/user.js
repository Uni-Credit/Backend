const pool = require("../services/db");




class UserModel {


    static async returnUsersCadastrated(){ 
        // ´pool.query
    }

    static async loginUser(credentials){
        
        return await pool.query(`
            SELECT * FROM Cliente 
            WHERE Matricula = ${credentials.matricula} AND Senha = ${credentials.password}
        ` );
    }


    static async registerUser(userInformation){
        
        return await pool.query(`
           INSERT INTO Cliente (Nome, Email, Senha, Matricula)
           VALUES ${userInformation.name}, ${userInformation.email},
           ${userInformation.password},
           ${userInformation.matricula},
        `);
    }



    static createUserTable() {
        // #TODO: register date
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