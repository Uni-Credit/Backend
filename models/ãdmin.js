const pool = require("../services/db")



class AdminModel {


    static createAdminTable() {
        pool.query(`
        CREATE TABLE IF NOT EXISTS Admin (
            ID_ADMIN INT PRIMARY KEY,
        Nome VARCHAR(100),
        Email VARCHAR(100),
        Senha VARCHAR(50)
    )
        `);
    }
}


module.exports = AdminModel