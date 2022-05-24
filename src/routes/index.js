import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../pages/cart';
import Home from '../pages/Home';
import Product from '../pages/Product';
import SingleProduct from '../pages/SingleProduct';

const appRouters = () => {
    return(
        <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/id' element={<SingleProduct />} />
        </Routes>
        </div>
    )
}

export default appRouters;