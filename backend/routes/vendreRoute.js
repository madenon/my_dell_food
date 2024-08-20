import express from 'express' ;
import { addVendre, listVendre, removeVendre } from '../controllers/vendreController.js';
import multer from 'multer';


const vendreRouter = express.Router()
// Image storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

vendreRouter.post("/add",upload.single("image"), addVendre)
vendreRouter.get("/list", listVendre)
vendreRouter.post("/remove", removeVendre)

export  default vendreRouter;