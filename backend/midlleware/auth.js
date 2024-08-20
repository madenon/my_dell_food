import jwt from "jsonwebtoken";


const authMiddleware = async(req, res, next)=>{
    const {token} = req.headers;
    if(!token){
        return  res.json({success:false, message:"Vous n'avez pas d'autorisation"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        //console.log(token_decode) === { id: '66c216f5904a8eee42564548', iat: 1723996055 }
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Erreur d information"})
    }

}


export default authMiddleware;