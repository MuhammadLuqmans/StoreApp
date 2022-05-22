import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Heading = ({ title, sx }) => (
  <Box sx={{ my: 5, }}>
    <Typography
      sx={{
        fontSize: { xs: 36, md: 52 },
        fontWeight: "bold",
        fontFamily: "Roboto, sans-serif",
        textTransform:'uppercase',
        textAlign:'center',
        ...sx,
      }}
    >
      {" "}
      {title}{" "}
    </Typography>
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Divider
        sx={{ border: "1px solid #000", maxWidth: "460px", m: "auto", mt:0 }}
      />
      <Divider
        sx={{ border: "1px solid #000", maxWidth: "360px", m: "auto", mt: 1 }}
      />
    </Box>
  </Box>
);
export default Heading;
