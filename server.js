import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import { userRoutes } from "./routes/userRoutes.js";


const app=new express();

app.use(express.json())
app.use("/products",productRouter)
app.use("/cart",cartRoute)
userRoutes(app);


mongoose.connect("mongodb://localhost:27017/ShoppyGlobe")
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));



const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})