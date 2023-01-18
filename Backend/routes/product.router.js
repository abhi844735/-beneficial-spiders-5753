const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config();
const { Productmodel } = require("../models/product.model");
const productRouter = express.Router();
const app = express();
app.use(express.json());
productRouter.post("/add", async (req, res) => {
    try {
        let payload=req.body;
        let data = new Productmodel(payload);
        await data.save();
        res.send({message:"data has been added"});
        
    } catch (error) {
        res.status(401).send({message:error.message})
    }
})
productRouter.get("/",async(req,res)=>{
    try {
        let q=req.query.q;
        if(q=="Bed"){
            let data = await Productmodel.find({category:"Bed"}).limit(9);
            res.send({message:data})
        }else if(q=="Sofa"){
            let data = await Productmodel.find({category:"Sofa"}).limit(9);
            res.send({message:data})
        }
        else if(q=="Chair"){
            let data = await Productmodel.find({category:"Chair"}).limit(9);
            res.send({message:data})
        }
        else if(q=="Table"){
            let data = await Productmodel.find({category:"Table"}).limit(9);
            res.send({message:data})
        }
        else if(q=="Rack"){
            let data = await Productmodel.find({category:"Rack"}).limit(9);
            res.send({message:data})
        }
        else if(q=="Cutlery"){
            let data = await Productmodel.find({category:"Cutlery"}).limit(9);
            res.send({message:data})
        }
        else{
            let data = await Productmodel.find().limit(9);
            res.send({message:data})
        }
            
    } catch (error) {
        res.status(401).send({message:error.message})
    }
})

module.exports = { productRouter, }