const CreditModel = require('../models/credit');

const TransactionModel = require("../models/transactions");

class CreditController {
  // Make a deposit
  static async makeDeposit(req, res) {
    try {
      const { userId, amount, providerId } = req.body;

      if (!userId || amount == null || !providerId) {
        return res.status(400).json({ error: 'userId, amount and providerId are required' });
      }
  

      let results = await CreditModel.depositCredit(userId, amount, providerId);

      let success = results.affectedRows != 0;

      return res.status(success ? 200 : 400)
      .json({ success: success, results: results });
    } catch (error) {
      console.error('Error in makeDeposit:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async getHistoric(req, res) {
    try {
      const { userId } = req.body;

      if (!userId) {
        return res.status(400).json({ error: 'userId parameter is required' });
      }
 

      const transactionHistory = await TransactionModel.getTransactionHistory(userId);

      return res.status(200).json({ success: true, transactionHistory });
    } catch (error) {
      console.error('Error in getHistoric:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Make a transaction
  static async maketransaction(req, res) {
    try {
      const { userId, providerId, cost } = req.body;

      if (!userId || cost == null) {
        return res.status(400).json({ error: 'userId and cost are required' });
      }

      // Validate if the user has sufficient credit (you might want to implement this)
      // ...
 
      let success = await CreditModel.maketransaction(userId,providerId, cost);
 
      return res.status(success ? 200 : 400)
      .json({ success: success,  });
    } catch (error) {
      console.error('Error in maketransaction:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Get credit information for a user
  static async getCreditInformationFromUser(req, res) {
    try {

      console.log("getCreditInformationFromUser");
      console.log(req.body); 
      console.log(req.params); 
      
      const { userId , providerId } = req.body;

      if (!userId) {
        return res.status(400).json({ error: 'userId and providerId parameter is required' });
      } 

      const creditInformation = await CreditModel.getCredit(userId, providerId);
 
      return res.status(200).json({ success: true, creditInformation });
    } catch (error) {
      console.error('Error in getCreditInformationFromUser:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = CreditController;