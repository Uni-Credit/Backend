


class ProviderModel {


    static createProviderTable() {
        pool.query(`
        CREATE TABLE IF NOT EXISTS Provider (
            ID_PROVIDER INT PRIMARY KEY,
            Name: VARCHAR(100)
    )
        `);
    }
}

module.exports = ProviderModel