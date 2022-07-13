import { useState } from "react";
import { useQuery } from "react-query";
//components
import Drawer from "@mui/material/Drawer";
import LinearProgress from '@mui/material/LinearProgress';
import Grid from "@mui/material/Grid";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Badge from '@mui/material/Badge';

import Cart from "./Cart/Cart"

// styles 
import { StyledButton, Wrapper } from "./App.Styles";
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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemType[]);

  // use query for load data
  const { data, isLoading, error } = useQuery<cartItemType[]>("products", getProducts);

  // console.log(data);

  // function 

  const getTotalItems = (items: cartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

    // add to cart items
  const handleAddToCart= (clickedItem: cartItemType) => {
    setCartItems(prev =>{
      // 1. is the item already in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if(isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1}
           : item 
          );
      }
      // 2. if first time added into cart
      return [...prev , {...clickedItem,amount : 1 }]
    });
  }

  // remove item from cart

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />

  if (error) return <div>something went to wrong ...</div>



  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>
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
