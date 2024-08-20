import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connexion à la base de donnée')
    }).catch((err)=>{
        console.log(err)

    });
}