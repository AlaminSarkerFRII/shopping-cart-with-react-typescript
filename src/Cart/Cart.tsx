import CartItem from "../CartItem/CartItem"
// types
import {cartItemType} from "../App";
// styles
import {Wrapper} from "./Cart.styles";

type props = {
    cartItems : cartItemType[],
    addToCart : (clickedItem : cartItemType) => void,
    removeFromCart : (id:number) => void
}

const Cart: React.FC<props> = ({cartItems , addToCart, removeFromCart}) =>{

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> : null}
            {cartItems.map(item=> (
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}  />
            ))}
        </Wrapper>
    )

}

export default Cart;