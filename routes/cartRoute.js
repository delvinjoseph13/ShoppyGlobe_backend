import express from "express"
import { addCart, getCartItems, removeCartitem, updateCartQuantity } from "../controllers/cart.js";
import { authorization } from "../middelware/authorization.js";

const cartRouter=express.Router();

cartRouter.get("/",authorization,getCartItems)
cartRouter.post("/",authorization,addCart)
cartRouter.put("/:id",authorization,updateCartQuantity);
cartRouter.delete("/:id",authorization,removeCartitem)

export default cartRouter;