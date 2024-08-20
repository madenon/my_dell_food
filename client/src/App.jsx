import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrder from './pages/MyOrders/MyOrder'
import Autre from './pages/Autre/Autre'
const App = () => {
  const [showLogin , setShwoLogin] = useState(false)
  return (
   <>
   {showLogin?  <LoginPopup  setShwoLogin={setShwoLogin}/>:<></>}
    <div className='app'>
      <Navbar setShwoLogin={setShwoLogin}/>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/cart'  element={<Cart/>} />
        <Route path='/autre'  element={<Autre />} />
        <Route path='/order'  element={<PlaceOrder />} />
        <Route path='/verify'  element={<Verify />} />
        <Route path='/myorders'  element={<MyOrder />} />
      </Routes>
    </div>
      <Footer/>
   </>
  )
}

export default App