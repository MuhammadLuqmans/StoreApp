import React from 'react';
import { useSelector } from 'react-redux';

const CartItems = (second) => { 
    const items = useSelector((state) => state.cart);
    console.log(items)
    return(
        <div>

        </div>
    )
 }