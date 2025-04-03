import mongoose from "mongoose";


const productschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    stockquantity:{
        type:Number,
        required:true
    }
})

const Product=mongoose.model("product",productschema)

export default Product;