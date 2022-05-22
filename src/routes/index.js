import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/cart'

const appRouters = () => {
    return(
        <div>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product/id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
    )
}

export default appRouters;