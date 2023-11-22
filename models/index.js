



const AdminModel = require('../models/ãdmin.js');
const CreditModel = require('../models/credit.js');
const ProviderModel = require('../models/provider.js');
const UserModel = require('../models/user.js');




class ModelsController {
    static createModels() { 
        
        UserModel.createUserTable();
        ProviderModel.createProviderTable(); 
        CreditModel.createCreditModel(); 
        AdminModel.createAdminTable(); 
    }
} 

module.exports = ModelsController