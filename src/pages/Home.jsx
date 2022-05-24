import React from "react";
import Header from "../component/Header";
import { Box } from "@mui/material";
import Banner from "../component/HomeComp/Banner";
import Store from "../component/HomeComp/Store";

const Home = () => {
  return (
    <Box>
      <Header
        title="Brand Regent Mall"
        Content={`There’s a saying that if you’re not online, you don't exist. A
            saying that grows more relevant each day as the online marketplace
            continues to dominate the shopping world.`}
            btnTitle='Shop now'
      />
      <Banner />
      <Store />
    </Box>
  );
};

export default Home;
