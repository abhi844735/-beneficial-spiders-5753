const express=require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors =require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.router");
const { productRouter } = require("./routes/product.router");
const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use("/user",userRouter)
app.use("/product",productRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to db");
    } catch (error) {
        
    }
    console.log("server is running");
})
