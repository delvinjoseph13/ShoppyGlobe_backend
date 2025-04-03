import jwt from "jsonwebtoken";
import dotenv from "dotenv"


dotenv.config()

//middelware function to check if there is a access token present or not 
export const authorization=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];
    if(!token){
       return res.status(401).json({message:"Access Denied No token provided"})
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid Tokken"})
        }
        req.user=user
        next()
    })
    
}