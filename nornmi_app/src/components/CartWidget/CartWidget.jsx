import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { UseCart } from '../../context/CartContext';

const CartWidget = () => {
    // const {CartQuantity} = UseCart()

    return (
        <div>
            <ShoppingCartIcon sx={{color:"#435C52"}}/>
            {/* <span>{ CartQuantity() }</span> */}
        </div>
    )
}

export default CartWidget;


