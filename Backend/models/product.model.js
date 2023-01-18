const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    url:String,
    name:String,
    material:String,
    category:String,
    discount_price:Number,
    price:Number,
    discount:Number,
    cashback_price:Number,
    shipday:Number
})
const Productmodel=mongoose.model("products",productSchema);
module.exports={Productmodel,}