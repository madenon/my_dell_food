import React, { useState,useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import {StoreContext} from "../../context/StoreContext"
import axios from "axios";
import { set } from "mongoose";
const LoginPopup = ({ setShwoLogin }) => {
  const  {url,setToken} = useContext(StoreContext)
  const [currentState, setCurrentState] = useState("Login");
  const[data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

const onChangeHandler = (event)=>{
  const name = event.target.name
  const value = event.target.value
  setData(data=>({...data, [name]:value}))

}

const onLogin = async(event)=>{
  event.preventDefault()
  let newUrl = url;
  if(currentState==="Login"){
  newUrl+= "/api/user/login"
  }
  else{
    newUrl +="/api/user/register"
  }
  const response = await axios.post(newUrl, data);
  if(response.data.success){
   setToken(response.data.token);
   localStorage.setItem("token",response.data.token);
   setShwoLogin(false)
  }
  else{
    alert(response.data.message)
    setShwoLogin(true)
  }
}



  return (
    <div className="login-popup">
      <form  onSubmit={onLogin} className="login-popup-container">
        <div className="login-pupup-title">
          <h2>{currentState}</h2>

          <img
            onClick={() => setShwoLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-pupup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input name="name" onChange={onChangeHandler} value={data.name}  type="text" required placeholder="Votre nom completer " />
          )}
          <input name="email" onChange={onChangeHandler}value={data.email}  type="email" required placeholder="Votre email " />
          <input name="password" onChange={onChangeHandler}value={data.password}  type="password" required placeholder="Votre mot de passe " />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Céerun compte" : "Connectez-vous"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            Avant de continuer vous devez accpeter les condition de notre
            plitique de vente.
          </p>
        </div>
        {currentState === "Login" ? (
          <p>
            Créer un nouveau compte ? <span onClick={()=>setCurrentState("Sign Up")}>Cliquer-ici</span>{" "}
          </p>
        ) : (
          <p>
            Avez-vous déjà un compte ? <span onClick={()=>setCurrentState("Login")}>Connectez-vous</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
