const promisePool = require("../services/db");



class ProviderModel {


    static getProviders() {

    }

    

    static createProviderTable() {
        promisePool.query(`
        CREATE TABLE IF NOT EXISTS Provider (
            ID_PROVIDER INT PRIMARY KEY,
            Name VARCHAR(100)
    )
        `);
        promisePool.query(`
        INSERT IGNORE INTO Provider (ID_PROVIDER, Name) VALUES
        (1, 'RU 1'),
        (2, 'RU 2') 
      `);
    }
} 

module.exports = ProviderModel