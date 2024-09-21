import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// creation de token

const createToken =  (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// inscription de l utilisateur

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    //existance de l 'utilisateur
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Utilisateur existe déjà" });
    }
    // validation du mot de passe
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Le mot de passe ne peut pas etre vide",
      });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "mot de passe faible" });
    }

    // crypter  le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name:name,
      email:email,
      password: hashPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: "Une erreur s'est produite" });
  }
};

//connexion de l'utilisateur
const loginuser = async (req, res) => {
    const {email, password}= req.body ;
    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.json({success:false, message:"utilisateur introuvable"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success:false, message:"Mot de passe incorrect"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Email ou mot de passe invalide" })
        
    }
};

export { loginuser, registerUser };
