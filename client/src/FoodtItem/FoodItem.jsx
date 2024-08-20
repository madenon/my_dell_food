import React, { useContext, useState } from "react";
import "./FootItem.css"
import "./FoodItem";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, image, price, description }) => {
const {cartItems,addToCart,removeFromCart, url} = useContext(StoreContext)
  return (
    <div className="food-item" key={id}>
      <div className="food-item-img-container">
        <img src={url+"/images/"+ image} alt="" className="food-item-image" />
       {!cartItems[id]
        ? <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white}  alt=""  />
        :<div className="foot-item-counter"> 
        <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
        <p>{cartItems[id]}</p>
        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>
       }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="foot-item-desc">{description}</p>
        <p className="food-item-price">{price} DH</p>
      </div>
    </div>
  );
};

export default FoodItem;
