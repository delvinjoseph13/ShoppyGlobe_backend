import express from "express"
import { addProducts, getProductById, getProducts, removeProducts } from "../controllers/products.js";
import { authorization } from "../middelware/authorization.js";

const productRouter=express.Router();

productRouter.get("/",authorization,getProducts)
productRouter.get("/:id",authorization,getProductById)
productRouter.post("/product",authorization,addProducts)
productRouter.delete("/:id",authorization,removeProducts)


export default productRouter;