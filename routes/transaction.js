







 
const express=require('express'); 
const router=express.Router()
const CreditController = require('../controllers/credit_controller.js');

 
// Pegar todas as informações de crédito de um usuário
router.get("/credits", CreditController.getCreditInformationFromUser );

// Depósitar determinado crédito
router.post("/deposit", CreditController.makeDeposit );
 
// Fazer transação com determinado provedor
router.post("/transact", CreditController.maketransaction );



// Histórico de Créditos
router.get("/historic", CreditController.getHistoric );

module.exports=router;

