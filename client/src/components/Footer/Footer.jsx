import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo-img" />

          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum magnam
            tenetur assumenda officia illum aspernatur obcaecati temporibus
            
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-centent-center">
            <h2>ENTREPRISE</h2>
            <ul>
                <li>Accueil</li>
                <li>A propos de nous</li>
                <li>Livraison</li>
                <li>politique de confidentialité</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>CONTACTEZ-NOUS</h2>
            <ul>
                <li>0000997671+121</li>
                <li>atieke@gmail.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyriht">Tout droit réservé &copy; 2024 Firdaus</p>
    <hr/>
    </div>
  );
};

export default Footer;
