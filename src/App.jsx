import React from 'react'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import NikeProduct from './pages/NikeProduct'
import { Routes,Route, Navigate } from 'react-router-dom'
import NewBalanceProduct from './pages/NewBalanceProduct'
import AddidasProduct from './pages/AddidasProduct'
import LebronsProduct from './pages/LebronsProduct'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <Routes>
        {/* <Home /> */}
        <Route path="/" element={<Home />} />
        <Route path="/nikeproduct" element={<NikeProduct />} />
        <Route path="/newbalance" element={<NewBalanceProduct />} />
        <Route path="/addidas" element={<AddidasProduct />} />
        <Route path="/lebron" element={<LebronsProduct />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
        {/* <Product /> */}
      </Routes>
    </>
  );
}

export default App