const pool = require("../services/db");



class CreditModel {


    static async depositCredit(addition) {


        // Passo 1: Pegar o crédito atual
        var creditoAtual = await CreditModel.getCredit();
        print(creditoAtual);
        // Passo 2: Soma o crédito atual e a adição
       
       // var credito = credtioAtual.credit + addition;
        
       // Passo 3: Salvar a nova quantidade de créditos
        
       saveNewCredits(credito);
    }

    static async getCredit(userId)  {
        return await pool.query(`
        SELECT value FROM Credit WHERE userId = ${userId}
        `);
    }


    static async saveNewCredits(credit) {
            }
        // Update Table
    }

    static createCreditModel() { 
        pool.query(`
        CREATE TABLE IF NOT EXISTS Credito (
        ID INT PRIMARY KEY,
        Valor FLOAT,
        ID_PROVIDOR INT, 
        ID_USER INT,
        FOREIGN KEY (ID_USER) REFERENCES Cliente(ID_USER),
        FOREIGN KEY (ID_PROVIDER) REFERENCES Provedor(ID_PROVIDER),
    )
        `);
    }
}

module.exports = CreditModel