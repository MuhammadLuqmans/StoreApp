import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bgImage from "../../assets/shirt.webp";

export default function Header() {
  return (
    <Box
      sx={{
        background: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        container
        xs={12}
        sx={{ justifyContent: "space-around", py:{xs:5, md:0} }}
      >
        <Grid item xs={12} sm={12} md={5} sx={{ background:'#cccf01cc',py:{xs:5, md:20}, px:{ xs:2 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              letterSpacing: "normal",
              fontSize: { xs: 42, md: 60 },
              textTransform: "capitalize",
            }}
          >
            Brand Regent Mall
          </Typography>
          <Typography
            sx={{
              fontWeight: "normal",
              letterSpacing: "normal",
              fontSize: { xs: 18, md: 24 },
              textTransform: "normal",
              mt:2
            }}
          >
            There’s a saying that if you’re not online, you don't exist. A
            saying that grows more relevant each day as the online marketplace
            continues to dominate the shopping world.
          </Typography>
          <Button variant="contained" sx={{ maxWidth:200, width:'100%',fontWeight:'bold',py:1.4, fontSize:18,mt:3 }}>Shop Now</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
        </Grid>
      </Grid>
    </Box>
  );
}
