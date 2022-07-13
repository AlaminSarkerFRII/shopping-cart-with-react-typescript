import { Button } from "@mui/material";
// styles
import {Wrapper} from "./Item.Styles"
// types
import {cartItemType} from "../App"
import React from "react";

type props = {
    item :cartItemType,
    handleAddToCart :(clickedItem:cartItemType) => void,
}

const Item : React.FC<props> = ({item , handleAddToCart}) =>(
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
    <Button onClick={()=>handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
)

export default Item;