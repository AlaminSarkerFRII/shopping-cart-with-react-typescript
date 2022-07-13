import { useState } from "react";
import { useQuery } from "react-query";
//components

import Drawer from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Grid from "@mui/material/Grid";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/icons-material/Badge";

// styles 

import { Wrapper } from "./App.Styles";
import Item from "./Item/Item";

// cart Items 

export type cartItemType = {
  id: number,
  category: string,
  description: string
  price: number,
  image: string,
  title: string,
  amount: number,
}

// products

const getProducts = async (): Promise<cartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();



const App = () => {


  const { data, isLoading, error } = useQuery<cartItemType[]>("products", getProducts);

  console.log(data);

  // function 

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: cartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />

  if (error) return <div>something went to wrong ...</div>



  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>

  );
}

export default App;
