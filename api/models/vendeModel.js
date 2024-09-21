import mongoose, { mongo } from "mongoose";
import { type } from "os";

const vendSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true},
}, {timestamps:true})

const vendModel = mongoose.models.vendre||  mongoose.model("vendre", vendSchema)

export default vendModel;