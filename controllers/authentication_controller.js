const UserModel = require("../models/user");

class Authenticationcontroller {


    static async getUsers(req, res)  {
        res.status(200).send(
            await UserModel.getUsers()
        );
    }
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

        
            console.log(result);
            var resulted = result[0];

            console.log(resulted.toString()); 
            if(resulted.length == 0) {
                res.status(400).send({ 
                    "message": "Email ou Senha incorretos!"
                });
                return;
            }

            res.status(200).send(resulted);
        })
        .catch((err)=>{
            res.status(500).send({err:err});
        });
    }
     
    // #TODO
    static registerUser(req, res) {

        
        console.log(req.body);
        UserModel.registerUser(req.body).then((result)=>{
            res.status(200).send(result);
        }).catch((err)=>{
            res.status(500).send({err:err});
        });
    }
    
}

module.exports = Authenticationcontroller