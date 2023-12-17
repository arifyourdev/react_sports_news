import { comparePassword, hashedPass } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"

export const  registerController = async(req,res) =>{
     try{
         const {name,email,password,role} = req.body
        // validation
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        // if(password != c_password){
        //     return res.send({message:'password & confirm password not macthed'})
        // }
    //    Exist User
      const e_user = await userModel.findOne({email})
      if(e_user){
        return res.status(200).send({
            success:true,
            message:"Already exist user",
         })
      }

    const hashPass = await hashedPass(password);
    const add_user = await userModel({name,email,password:hashPass,role}).save()
    res.status(200).send({
        success:true,
        message:"User added Successfully",
        add_user
    })
    
    }catch(e){
        console.log(e)
        res.status(500).send({
            success:false,
            message:'Error in Registration'
        })
    }
 }
 
// Login User
 export const loginController = async (req,res) =>{
  try{
    const {email,password} = req.body;
    if(!email || !password){
        return res.send({message:"Invalid email or password"})
    }
 
    // check user
    const user = await userModel.findOne({email})
    if(!user){
        return res.send({
            success:true,
            message:"Email is not Registered"
        })
    }
   
    // password Matching
    const passwordMatch = await comparePassword(password,user.password)
    if(!passwordMatch){
        res.send({
            success:true,
            message:"Invalid Password"
        })
    }

    //Token
    const token = await JWT.sign({_id:user._id},process.env.jWT_SECRET,{expiresIn:'7d'})
    
    res.status(200).send({
        success:true,
        message:"Login Successfully",
        user:{
            name:user.name,
            email:user.email,
            role:user.role
        },
        token
    })

  }catch(e){
    res.status(500).send({
        success:true,
        message:"Error in Login",
    })
  }
}

// Test Router
export const testController = (req,res) =>{
    res.send({message:"This is Test Route"})
}

