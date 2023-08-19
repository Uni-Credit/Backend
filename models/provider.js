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
    }
} 

module.exports = ProviderModel