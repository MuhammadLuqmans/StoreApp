import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { remove } from "../../redux/slice";
import Heading from "../Heading";

const LINES_TO_SHOW = 2;

const CartItems = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  //   const param = useParams;
  const items = useSelector((state) => state.cart);
  console.log("items", items);

  const handleDelete = (id) => {
    dispatch(remove(id))
  }

  return (
    <Box>
      <Heading title='Selected Cart items' />
      { items.lenght !== 0 ? items.map((cartItem, idx) => {
        return (
          <Grid
            item
            key={cartItem.id + idx}
            container
            xs={12}
            sx={{
              maxWidth: { xs: 380, sm: "sm" },
              width: "100%",
              display: "flex",
              m: "auto",
              my: 5,
              p: 1,
              px: 2,
              border: "1px solid gray",
              backgroundColor: "#f6f6f6",
              borderRadius: "12px",
              boxShadow: 10,
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              sx={{
                display: { xs: "flex", sm: "none" },
                textAlign: "center",
                justifyContent: "center",
                m: "auto",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: { xs: "100%", sm: 190 },
                  m: "auto",
                }}
                src={cartItem.image}
                alt="Live from space album cover"
              />
            </Grid>

            <Grid item xs={12} sm={8} sx={{}}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {cartItem.title}
                </Typography>
                <Typography
                  variant="subtitle6"
                  color="text.secondary"
                  component="div"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "5",
                    WebkitBoxOrient: "vertical",
                    height: { xs: "100%", sm: 120 },
                    mb: { xs: 1, sm: 0 },
                  }}
                >
                  {cartItem.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignSelf: "end",
                  mt: { xs: 0, sm: 2 },
                }}
              >
                <Button
                  variant="outlined"
                  onClick={()=>handleDelete(cartItem.id)}
                  sx={{
                    bgcolor: "skyblue",
                    fontWeight: "bold",
                    color: "primary",
                    "&:hover": {},
                  }}
                >
                  {" "}
                  Remove Item
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                display: { xs: "none", sm: "flex" },
                backgroundColor: "#f6f6f6",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 200,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 190,
                }}
                image={cartItem.image}
                alt="Live from space album cover"
              />
            </Grid>
          </Grid>
        );
      }) : <h2 style={{ textAlign:'center' }}>O selected item</h2> }
    </Box>
  );
};

export default CartItems;
