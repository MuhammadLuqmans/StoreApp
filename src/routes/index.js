import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/cart';
import Home from '../pages/Home';
import Product from '../pages/Product';

const appRouters = () => {
    return(
        <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
    )
}

export default appRouters;