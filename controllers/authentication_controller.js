const UserModel = require("../models/user");



class Authenticationcontroller {

    // #TODO
    static loginUser(req, res) {

        UserModel.loginUser(req.body)
        .then((result)=>{
            res.status(200).send(result);
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