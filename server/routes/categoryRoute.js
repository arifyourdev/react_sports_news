import express from "express";
import {addCategory,updateCategory,categoryList,singleCategory,deleteCategory} from "../controllers/categoryController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router()

router.post("/add-category",requireSignIn ,isAdmin,addCategory)
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategory)
router.get('/category',requireSignIn,isAdmin,categoryList)
router.get('/single-category/:slug',requireSignIn,isAdmin,singleCategory)
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategory)

 

export default router