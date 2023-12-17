import categoryModel from "../models/categoryModel.js";
import slugify  from "slugify";

// Add Category
export const addCategory = async(req,res) =>{
  try{
    const {name} = req.body;
    if(!name){
       res.status(200).send({success:false,message:"Name is Required"})
    }
    const exist_category = await categoryModel.findOne({name})
    if(exist_category){
        res.status(500).send({success:true,message:"This Category is already exists"})
    }

    const category = await categoryModel({name,slug:slugify(name)}).save()
    res.status(200).send({
        success:true,
        message:"Category Added Successfully",
        category
    })

  }catch(e){
    res.status(500).send({
        success:false,
        e,
        message:"Error in Category"
    })
  }
}

//  Update Category

export const updateCategory = async (req,res) =>{
    try{
       const {name} = req.body;
       const {id} = req.params;
       const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
       res.status(200).send({
        success:true,
        message:"Category Updated Successfully",
        category
       })

    }catch(e){ 
        res.status(500).send({
            success:true,
            message:"Error in Updating Category",
            e
        })
    }
}

// Category List
export const categoryList = async (req,res) =>{
    try{
       const category = await categoryModel.find();
       res.status(200).send({
        success:true,
        message:"Category List",
        category
       }) 
    }catch(e){
        res.status(500).send({
            success:true,
            message:"Error in Category",
        })
    }
}

// Find Single Category
export const singleCategory = async (req,res) =>{
    try{
       const category = await categoryModel.find({slug:req.params.slug})
       res.status(200).send({
        success:true,
        message:"Find Category Successfully",
        category
       })
    }catch(e){
        res.status(500).send({
            success:true,
            message:"Error in Category",
            e
        })
    }
}

// Delete Category
export const deleteCategory = async (req,res) =>{
    try{
       const {id} = req.params;
       const delete_category = await categoryModel.findByIdAndDelete(id);
       res.status(200).send({
        success:true,
        message:"Category Deleted Successfuly",
        delete_category
       })
    }catch(e){
        res.status(500).send({
            success:true,
            message:"Error in Delete Category",
            e
        })
    }
}