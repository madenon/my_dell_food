import React, { useEffect, useState } from "react";
import "./Autre.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";

const Autre = () => {
  const { cartItems, token,  food_list, getTotalCartAmount, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "", // nom de Famile
    lastName: "", // prenom
    email: "", // email
    street: "", // la rue ,
    city: "", // la ville
    state: "", // provience,
    zipcode: "", // code postal
    country: "", // pays
    phone: "" // numero
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems  =[];
    food_list.map((item)=>{
   if(cartItems[item._id]>0){
    let itemInfo = item;
    itemInfo['quantity'] = cartItems[item._id];
    orderItems.push(itemInfo)
   }
    })
   
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+20,
    }
    let response = await axios.post(url+"/api/order/autre",orderData,{headers:{token}})
    if(response.data.success){
     navigate("/")
    }
    else{
      alert("Erreur")
      console.log(response.data.message)
    }
  };

  const navigate = useNavigate()

  useEffect(()=>{
if(!token){
  navigate("/cart")

}else if(getTotalCartAmount() ===0){
  alert("Votre panier et est vide")
  navigate("/cart")
}
  },[token])

  return (
    <div>

   
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Informations sur la livraison </p>

        <label className="multi-field">Nom et prenom</label>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            required
            placeholder="Votre nom"
          ></input>
          <input
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Votre prénom"
            required
          ></input>
        </div>
        <label className="multi-field">Email</label>

        <input
          type="email"
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          required
          placeholder="Votre Adresse Email"
        />
        <label className="multi-field">La rue</label>
        <input
          type="text"
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="La rue de livraison"
          required
        />
        <label className="multi-field">La ville et le departement</label>
        <div className="multi-fields">
          <input
            type="text"
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="Ville"
            required
          ></input>
          <input
            type="text"
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="Votre departement"
            required
          ></input>
        </div>
        <label className="multi-field">Pays et code postal</label>

        <div className="multi-fields">
          <input
            type="text"
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Pays"
            required
          ></input>
          <input
            type="text"
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Code postal"
            required
          ></input>
        </div>
        <label className="multi-field">Numéro de Téléphone </label>

        <input
          type="text"
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Numéro de Téléphone "
          required
        />
      </div>
      <div className="place-order-right">
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
              <p>{getTotalCartAmount() === 0 ? 0 : 20}DH</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total commande</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20} DH
              </b>
            </div>
          </div>
          <button type="submit">Valider</button>
      
        </div>
      </div>
    </form>
    </div>
  );
};

export default Autre;
 