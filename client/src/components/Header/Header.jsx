import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header'>
    <div className="header-contents">
      <h2>Votre nourriture favorie ici</h2>
      <p> 
      Choisissez parmi un menu varié proposant une gamme délicieuse de 
      des plats élaborés avec les meilleurs ingrédients et l'expertise 
      </p>
      <button>Voir Menu du jour</button>
    </div>
  </div>
  )
}

export default Header