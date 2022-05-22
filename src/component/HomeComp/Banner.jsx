import { Box, Grid, Typography, IconButton } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box>
      <Grid
        item
        container
        xs={12}
        sx={{ px: 3, justifyContent: "space-between", alignItems: "center", background:'#1976d2',py:1 }}
      >
        <Grid item xs={12} sm={6}>
          <Typography sx={{ fontWeight: "bold", textAlign: "center", color:'#fff',fontFamily:'monospace' }}>
          
            Brand T-Shirts
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ fontWeight: "bold", textAlign: "center", color:'#fff', fontFamily:'monospace' }}>
            Brand T-Shoes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
