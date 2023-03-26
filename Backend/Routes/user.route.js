const express = require("express");
const userRouter = express.Router();
const {UserModel} = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

userRouter.post("/register",async(req,res)=>{
    const {email,pass,location,age} = req.body
    try {
        bcrypt.hash(pass, 5,async(err, hash) => {
            const user = new UserModel({email,pass:hash,location,age});
            await user.save();
            res.status(200).send({msg:"registration is done !!!"});
        });
    } catch (err) {
        res.status(400).send({msg:"unable to registration !!!",err:err.message});
    }
    
})

userRouter.post("/login",async(req,res)=>{
    const {email,pass} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(pass, user.pass, (err, result) => {
                if(result){
                    res.status(200).send({msg:"login successful !",token:jwt.sign({ "userID": user._id }, 'bruce')});    
                }else{
                    res.status(400).send({msg:"Wrong Credentials !!!"});
                }
            });
            
        }else{
            res.status(400).send({msg:"Wrong Credentials !!!"});
        }
        
    } catch (err) {
        res.status(400).send({err:err.message});
    }
})


module.exports={
    userRouter
}