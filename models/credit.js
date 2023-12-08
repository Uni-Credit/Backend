const { expression } = require("joi");
const promisePool = require("../services/db");
const TransactionModel = require("./transactions");



class CreditModel {



    
    static async depositCredit(userId, addition, providerId) {

      let updateResult = await CreditModel.updateValor(
        userId, providerId, `Valor + ${addition}`
      );
 
    console.log("finished update");   
    
        if (updateResult[0].affectedRows == 0) {
          console.log("making new credits");  
            updateResult = await CreditModel.saveNewCredits(userId, addition,
              providerId); 
        }   
   
 
        if(updateResult[0].affectedRows != 0) {
          TransactionModel.recordDepositTransaction(userId, addition,
            providerId); 
        }
 
        return updateResult; 
    }

    static async updateValor(userId, providerId, setValue) {
      return await promisePool.query(`
      UPDATE Credito SET Valor = ${setValue} WHERE ID_USER = ${userId} 
      AND ID_PROVIDER = ${providerId}
    `);  
    }
  
    static async maketransaction(userId, providerId, cost) {
        try {
            // Step 1: Check if user has sufficient credits
            const userCredit = await CreditModel.getCredit(userId, providerId);
      
            if (userCredit[0].Valor < cost) {
              return false;
            }  
       
            const newCreditValue = userCredit[0].Valor - cost;
            await CreditModel.updateValor(
              userId, providerId, newCreditValue 
            );
          
      
            
            TransactionModel.recordTransaction(
              userId, cost, providerId
            );
      
            return true; // Transaction successful
          } catch (error) {
            console.error('Error in maketransaction:', error);
            throw error; // Propagate the error to the calling code
          } 
    }

    static async getCredit(userId, providerId) {

        let extraClause = "";
        if(providerId != null) {
          extraClause =`AND 
          ID_PROVIDER = ${providerId}` ;
        }
        const [result] = await promisePool.query(`
          SELECT Valor, ID_PROVIDER FROM Credito WHERE ID_USER = ${userId} ${extraClause}
         
          `);
    
        if (result.length > 0) {
          return result;
        } else { 
          // Assuming default value if no record is found
          return [{ Valor: 0 }]; 
        }
      } 
    


      static async saveNewCredits(userId, credit, providerId) {
        return await promisePool.query(`
          INSERT INTO Credito (Valor, ID_USER, ID_PROVIDER) VALUES
           (${credit}, ${userId}, ${providerId}) 
        `);  
      } 
    

    static async createCreditModel()  { 

        
        //const connection = await pool.getConnection();
      // promisePool.query(`
      // DROP TABLE Credito
        //`);
        //return;
        promisePool.query(` 
        CREATE TABLE IF NOT EXISTS Credito (
        ID INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
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