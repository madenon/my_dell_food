import userModel from "../models/userModel.js";

// ajouter les aticles au panier

const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "ajouté au panier" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Erreur d'ajout au panier" });
  }
};

//suppression les aticles dans le panier

const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
  
    if (cartData[req.body.itemId] > 0) {
        cartData[req.body.itemId] -= 1;
      }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true, message:"Article supprimé avec succès"});

  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Eurreur de suppression"})
  }
};

//  Fetch data recupreation des données du pqnier

const getCart = async (req, res) => {

    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Erreur de recupération"})
    }
};

export { addToCart, removeFromCart, getCart };
