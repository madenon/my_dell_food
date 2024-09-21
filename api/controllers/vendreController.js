import vendeModel from "../models/vendeModel.js";
import fs from "fs";

//ajouter des articles

const addVendre = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const vendre = new vendeModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await vendre.save();
    res.json({ success: true, message: "Article ajouté avec succès" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur lors de l'ajour" });
  }
};


// liest des artciles 

const listVendre = async(req, res) =>{
  try {
    const vendres = await vendeModel.find({})
    res.json({success:true, data:vendres})
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Erreur lors e la recuperation"})
    
  }

}

//supprimer un articles 

const removeVendre = async(req, res) =>{
  try {
    const vend = await vendeModel.findById(req.body.id)
    fs.unlink(`uploads/${vend.image}`, ()=>{})

    await vendeModel.findByIdAndDelete(req.body.id)
    res.json({success:true, message:"Article supprimé"})
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Erreur de suppression"})
  }

}

export { addVendre, listVendre, removeVendre };
