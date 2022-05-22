import React from 'react';
import Header from '../component/HomeComp/Header';
import { Box } from '@mui/material';
import Banner from '../component/HomeComp/Banner';
import Store from '../component/HomeComp/Store';

const Home = () => {
    return(
       <Box>
       <Header />
       <Banner />
       <Store />
       </Box>
    )
}

export default Home;