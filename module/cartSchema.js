import mongoose from "mongoose";

//cart schema
const cartSchema=new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 }
},{ timestamps: true })

const Cart=mongoose.model("cart",cartSchema)

export default Cart;