const UserModel = require("../models/user");



class Authenticationcontroller {


    loginUser(_,_) {

        UserModel.loginUser( );
    }
    registerUser(_,_) {

        UserModel.registerUser();
    }
}