import newsletterModel from "../models/newsletterModel.js"
import fs from "fs";
import slugify from "slugify";

export const addNewsletter = async (req,res) =>{
    try{
        const {category,title,slug,badge,description,status} = req.fields;
        const {image} = req.files;
        const add_newsletter = new newsletterModel({...req.fields,slug:slugify(title)})
        if(image){
            add_newsletter.image.data = fs.readFileSync(image.path)
            add_newsletter.image.contentType = image.type
        }
        await add_newsletter.save();
        res.status(200).send({
            success:true,
            message:"Newsletter Added Successfully",
            add_newsletter
        })
    }catch(e){
        console.log(e)
        res.status(500).send({success:true,message:"error in Code",e})
    }
}

// Display Newsletter
export const displayNewsletter = async (req,res) =>{
    try{
         const newsletter = await newsletterModel.find().select('-image').populate('category').sort({createdAt:-1});
         res.status(200).send({
            success:true,
            total :  newsletter.length,
            message:"Newsletter List",
            newsletter
         })
    }catch(e){
        res.status(500).send({success:true,message:"Error in Code"})
    }
}

// Find Single Newsletter
export const findsingleNewsletter = async (req,res) =>{
    try{

        const newsletter = await newsletterModel.findOne({slug:req.params.slug}).select("-image").populate('category');
        res.status(200).send({
            success:true,
            message:"Newsletter Display Successfully",
            newsletter
        })

    }catch(e){
        res.status(500).send({
            success:true,
            message:"Error in Code",
            e
        })
    }
}

// Find Separate Image
export const showImage = async(req,res) =>{
    try{
      const n_image = await newsletterModel.findById(req.params.nid).select("image")
      if(n_image.image.data){
        res.set('Content-type',n_image.image.contentType)
        res.status(200).send(n_image.image.data)
      }
    }catch(e){
        res.status(500).send({
            success:true,
            message:"Error in Code",
            e
        })
    }
}

// Update Newsletter

export const updateNewsletter = async(req,res) =>{
    try{

        const {category,title,slug,badge,description,status} = req.fields;
        const {image} = req.files
        const update = await newsletterModel.findByIdAndUpdate(req.params.nid,{...req.fields,slug:slugify(title)},{new:true})
        if(image){
            update.image.data = fs.readFileSync(image.path)
            update.image.contentType = image.type
        }
        await update.save();
        res.status(200).send({
            success:true,
            message:"Updated Successfully",
            update
        })

    }catch(e){
        res.status(500).send({
            success:true,
            message:"Error in Code"
        })
    }
}