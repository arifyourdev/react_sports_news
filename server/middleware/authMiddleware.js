import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js";

export const requireSignIn = async(req,res,next)=>{
    try{
        const decode = await JWT.verify(req.headers.authorization,process.env.jWT_SECRET);
        req.user = decode
        next()
 
    }catch(e){
        console.log(e)
        res.status(401).send({
            success:true,
            message:"Error in Decode Token"
         })
    }
}

// Admin Access
export const isAdmin = async (req,res,next) =>{
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:"Unathorize Access"
            });
        }else{
             next()
        }

    }catch(e){
        res.status(401).send({
            success:true,
            message:"Error in Admin"
        })
    }
}