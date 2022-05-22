import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import MediaCard from "./shopCard";
import Heading from "../Heading";

export default function Store() {
  const [storeItems, setStoreItems] = useState();

  useEffect(() => {
    const getStoreData = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setStoreItems(json);
        });
    };
    getStoreData();
  }, []);

  return (
    <div style={{ maxWidth: "1460px", margin: "auto" }}>
      <Heading title="Store Products" />
      <Grid
        item
        container
        xs={12}
        sx={{ justifyContent: "space-between",p:2 }}
      >
        {storeItems?.map((product) => (
          <Grid
            item
            xs={12}
            sm={5.9}
            md={3.9}
            lg={2.9}
            key={product.id}
            sx={{ mt:3, display:'flex', justifyContent:'center' }}
          >
            <MediaCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
