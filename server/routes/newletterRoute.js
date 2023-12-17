import express from "express"
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js"
import { addNewsletter ,displayNewsletter ,findsingleNewsletter ,showImage ,updateNewsletter } from "../controllers/newsletterController.js"
import formidable from "express-formidable";
const router = express.Router()

router.post("/add-newsletter",requireSignIn,isAdmin,formidable(),addNewsletter);
router.get("/newsletter",displayNewsletter);
router.get("/single-newsletter/:slug",requireSignIn,isAdmin,findsingleNewsletter);
router.get("/newsletter-image/:nid",showImage)
router.put("/update-newsletter/:nid",requireSignIn,isAdmin,formidable(),updateNewsletter);

export default router