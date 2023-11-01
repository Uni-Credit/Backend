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

    // Retorna modelo de crédito com base no usuário
    // 1 usuario -> n créditos (lista de créditos)
    static async getCredit(userId)  {

        // id do provedor -> informações do provedor
        // informações de crédito


        return await promisePool.query(`
        SELECT value FROM Credit WHERE userId = ${userId}
        `);
    }


    static async saveNewCredits(credit) {
            
        // Update Table
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