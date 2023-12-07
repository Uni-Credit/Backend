const promisePool = require("../services/db");

class TransactionModel {

  static async recordDepositTransaction(userId, addition, providerId) {
    try {
      const transactionResult = await promisePool.query(`
        INSERT INTO TransactionHistory (UserID, Amount, ProviderID,
             TransactionType) 
        VALUES (${userId}, ${addition}, ${providerId}, 'Deposit')
      `);

      return transactionResult;
    } catch (error) {
      console.error('Error in recordDepositTransaction:', error);
      throw error;
    }
  }

  static async recordTransaction(userId, amount, providerId) {
    try {
      const transactionResult = await promisePool.query(`
        INSERT INTO TransactionHistory (UserID, Amount, ProviderID, 
            TransactionType)
        VALUES (${userId}, ${amount}, ${providerId}, 'Transaction')
      `);
 
      return transactionResult;
    } catch (error) {
      console.error('Error in recordTransaction:', error);
      throw error;
    }
  }

  static async getTransactionHistory(userId) {
    try {
      const transactionHistory = await promisePool.query(`
        SELECT * FROM TransactionHistory WHERE UserID = ${userId}
      `);

      return transactionHistory;
    } catch (error) {
      console.error('Error in getTransactionHistory:', error);
      throw error;
    }
  }

  static async createTransactionHistoryTable() {
    try {
      await promisePool.query(`
        CREATE TABLE IF NOT EXISTS TransactionHistory (
          ID INT PRIMARY KEY AUTO_INCREMENT,
          UserID INT,
          Amount FLOAT,
          ProviderID INT,
          TransactionType VARCHAR(50),
          Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (UserID) REFERENCES Cliente(ID_USER),
          FOREIGN KEY (ProviderID) REFERENCES Provider(ID_PROVIDER)
        )
      `);
    } catch (error) {
      console.error('Error in createTransactionHistoryTable:', error);
      throw error;
    }
  }
}

module.exports = TransactionModel;