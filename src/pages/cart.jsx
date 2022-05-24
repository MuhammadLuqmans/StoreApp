import { Box } from '@mui/material';
import React from 'react';
import CartItems from '../component/CartComp/CartItems';
import Header from '../component/Header';
import Banner from '../component/HomeComp/Banner';

const cart = () => {
    return(
        <Box>
            <Header title='Cart Items' btnTitle='Back to home' />
            <Banner />
            <CartItems />
        </Box>
    )
}

export default cart;