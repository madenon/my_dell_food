import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { food_list, cartItems, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate()
  
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Article</p>
          <p>Titre</p>
          <p>Prix</p>
          <p>Quantité</p>
          <p>Total</p>
          <p>Supprimer</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div  className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} DH</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}DH</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total du panier </h2>
          <div>
            <div className="cart-total-details">
              <p>{getTotalCartAmount()} DH </p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p className="frais">Frais de Livraison</p>
              <p>{getTotalCartAmount()===0?0:20}DH</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total commande</b>
              <b>{getTotalCartAmount() ===0?0:getTotalCartAmount() +20 } DH</b>
            </div>
          </div>
          <button  onClick={()=>navigate("/order")}>Passer à la caisse</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Si vous avez un coupon renter le ici</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Code  coupon" />
            <button>Soummetre</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
