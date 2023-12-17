import mongoose from "mongoose";

const newsletterSchema = mongoose.Schema({
     
    category:{
        type:mongoose.ObjectId,
        ref:"Category",
        req:true
    },
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String
    },
    badge:{
        type:String,
    },
    description:{
        type:String
    },
    image:{
        data:Buffer,
        contentType:String
    },
    status:{
        type:Number
    }
},{timestamps:true})

export default mongoose.model("Newsletter",newsletterSchema)