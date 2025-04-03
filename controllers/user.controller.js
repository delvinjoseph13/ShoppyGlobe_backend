import UserModel from "../module/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()


//user registration function using post method
export const userRegistration=async(req,res)=>{
    const {fullName,email,password}=req.body;
    
    await UserModel.findOne({email}).then(data=>{
        if(data){
            return res.status(409).json({message:"User Already exits"})
        }

        const newUser=new UserModel({
            fullName,
            email,
            password:bcrypt.hashSync(password,10)
        })

        newUser.save().then(data=>res.status(200).json({message:data}))
    }).catch(err=>res.status(500).json({message:err.message}))
}


//user login function using post method
export const login=(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email}).then(data=>{
        if(!data){
            return res.status(404).json({message:"User Not Found Register User"})
        }
        
        //useing bcrypt method to convert the hashed password
        let validPassword=bcrypt.compareSync(password,data.password);
        if(!validPassword){
            return res.status(400).json({message:"Password Not Matching"})
        }
        const accesstoken=jwt.sign({
            id:data.id,
            email:data.email,
            fullname:data.fullName
        },process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(200).json({
            message:"SuccessFully logged in",
            token:accesstoken,
            email:data.email,
            fullName:data.fullName
        }
        )
    }).catch(err=> res.status(500).json({message:err.message}))
}