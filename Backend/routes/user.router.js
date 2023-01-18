const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config();
const { Usermodel } = require("../models/user.model");
const userRouter = express.Router();
const app = express();
app.use(express.json());
userRouter.post("/register", async (req, res) => {
    try {
        let { username, email, phone, password } = req.body;
        bcrypt.hash(password, 5, async (err, secure_password) => {
            if (err) {
                res.send({ message: err.message })
            } else {
                let data = new Usermodel({ username, email, phone, password: secure_password });
                await data.save();
                res.send({ message: `${username} has successfullly registered` })
            }
        });

    } catch (error) {
        res.send({ message: error.message })
    }
})
userRouter.post("/login", async (req, res) => {
   try {
     let {email,password}=req.body;
     let data = await Usermodel.find({email});
    //  console.log(data);
    
    
     if(data.length>0){
        let userId=data[0]._id;
        //  console.log(userId)
         let secure_password=data[0].password;
         let username=data[0].username;
        bcrypt.compare(password,secure_password,async(err,result)=>{
                if(err){
                    res.send({message:err.message})
                }
                else if(result){
                  let token=  jwt.sign({userId},process.env.key);
                  res.send({message:`${username} has successfully logged in `,username,token})
                }else if(!result){
                    res.send({message:"wrong credentials"})
                }
        })
     }else{
        res.status(501).send({message:"email not found"})
     }
    
   } catch (error) {
     res.send({message:error.message})
   }
})
module.exports = { userRouter, }