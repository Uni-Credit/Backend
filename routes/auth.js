


 
const express=require('express');
const Authenticationcontroller = require('../controllers/authentication_controller');
const router=express.Router()


router.post("/register", Authenticationcontroller.registerUser);

router.post("/login", Authenticationcontroller.loginUser);

module.exports=router;


