import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     name:{
        type:String,
        trim:true,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     },
     role:{
      type:Number,
     }
},{timestamps:true})

export default mongoose.model('User',userSchema)