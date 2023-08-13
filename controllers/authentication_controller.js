const UserModel = require("../models/user");



class Authenticationcontroller {


    loginUser(_,_) {

        UserModel.loginUser({
            matricula: '', 
            password: '',
        },
        (err, res, fields) => {
            // ler resultado, se encontrou retornar, se não encontrou dar erro
        }
        );
    }
    registerUser(_,_) {

        UserModel.registerUser([], (err, res, fields) => {
            // Receber resultado
        });
    }
}