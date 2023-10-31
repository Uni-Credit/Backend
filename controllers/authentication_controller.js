const UserModel = require("../models/user");

class Authenticationcontroller {

    // #TODO
    static loginUser(req, res) {

        console.log(req.body);

        if (req.body.matricula == null || req.body.password == null){

            res.status(400).send({"message":"Matrícula ou senha vazios"});
            return;
        }

        if ([5, 6].includes(req.body.matricula.length) == null || req.body.password.length < 6){
            res.status(400).send({"message":"Matrícula ou senha incorretos"});
            return;
        }

        UserModel.loginUser(req.body)
        .then((result)=>{
            res.status(200).send(result[0]);
        })
        .catch((err)=>{
            res.status(500).send({err:err});
        });
    }
     
    // #TODO
    static registerUser(req, res) {

        UserModel.registerUser(req.body).then((result)=>{
            res.status(200).send(result);
        }).catch((err)=>{
            res.status(500).send({err:err});
        });
    }
    
}

module.exports = Authenticationcontroller