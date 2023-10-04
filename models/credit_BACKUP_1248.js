const promisePool = require("../services/db");



class CreditModel {


    static async depositCredit(addition) {


        // Passo 1: Pegar o crédito atual
        var creditoAtual = await CreditModel.getCredit();
        print(creditoAtual);

        // Passo 2: Soma o crédito atual e a adição
       
       // var credito = credtioAtual.credit + addition;

        
       // Passo 3: Salvar a nova quantidade de créditos
        
       saveNewCredits(creditoAtual);
    }

    static async getCredit(userId)  {

        return await promisePool.query(`
        SELECT value FROM Credit WHERE userId = ${userId}
        `);
    }


    static async saveNewCredits(credit) {
<<<<<<< HEAD
            }
        // Update Table
=======
 
>>>>>>> 2d8a4b6c6e398a655c5fccae5f35aa6ca3d407e2
    }

    static async createCreditModel()  { 

        
        //const connection = await pool.getConnection();

        promisePool.query(` 
        CREATE TABLE IF NOT EXISTS Credito (
        ID INT PRIMARY KEY,
        Valor FLOAT, 
        ID_PROVIDER INT, 
        ID_USER INT,
        FOREIGN KEY (ID_USER) REFERENCES Cliente(ID_USER),
        FOREIGN KEY (ID_PROVIDER) REFERENCES Provider(ID_PROVIDER)
    )
        `);

        //connection.release();  
    }
}

module.exports = CreditModel