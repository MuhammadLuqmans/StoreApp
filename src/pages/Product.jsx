import { Box } from '@mui/material';
import React from 'react';
import Header from '../component/Header';
import Banner from '../component/HomeComp/Banner';
import Store from '../component/HomeComp/Store';

const Product = () => {
    return(
        <Box>
        <Header title='All Products of Store' btnTitle='Back to home' />
        <Banner />
        <Store />
    </Box>
    )
}

export default Product;