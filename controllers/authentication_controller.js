const UserModel = require("../models/user");



class Authenticationcontroller {


    static loginUser(_,_) {

        UserModel.loginUser( );
    }
    
    static registerUser(_,_) {

        UserModel.registerUser();
    }
}