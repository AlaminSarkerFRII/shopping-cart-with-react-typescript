import {useState} from "react";
import { useQuery } from "react-query";
//components

import Drawer  from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Grid from "@mui/material/Grid";
import AddShoppingCart  from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/icons-material/Badge";

// styles 

import { Wrapper } from "./App.Styles";

// cart Items 

export type cartItemType = {
  id:number,
  category:string,
  description:string
  price:number,
  image:string,
  title:string,
  amount:number,
}

// products

const getProducts = async (): Promise<cartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();



const App = ()=>{


  const {data, isLoading,error} = useQuery <cartItemType[]>("products",getProducts);

  return (
    <div className="App">
     Star
    </div>
  );
}

export default App;
 