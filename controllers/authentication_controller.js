const UserModel = require("../models/user");
const CreditModel = require('../models/credit');

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
        .then(async (result) => {

        
            console.log(result);
            var resulted = result[0];

            console.log(resulted.toString()); 
            if(resulted.length == 0) {
                res.status(400).send({ 
                    "message": "Email ou Senha incorretos!"
                });
                return;
            }
 
            let userId = resulted[0]["ID_USER"];
            await CreditModel.depositCredit(userId, 0, 1); 
            await CreditModel.depositCredit(userId, 0, 2);  


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