import { Typography, Box,Grid } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#1976d2", p: 3, mt: 5, textAlign:'center' }}>
      <Grid item container sx={{ justifyContent:'center' }}>
      <Grid xs={12} sm={8} md={6} sx={{  }}>
        <Typography sx={{ fontSize:{xs:36,sm:52}, fontWeight:'bold', color:'#fff', fontFamily:'Roboto, sans-serif' }}>Footer</Typography>
        <Typography sx={{ fontSize:16, color:'#fff' }}>
          100% Polyester, Machine wash, 100% cationic polyester interlock,
          Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and
          highly breathable with moisture wicking fabric which helps to keep
          moisture away, Soft Lightweight Fabric with comfortable V-neck collar
          and a slimmer fit, delivers a sleek, more feminine silhouette and
          Added Comfort
        </Typography>
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}
