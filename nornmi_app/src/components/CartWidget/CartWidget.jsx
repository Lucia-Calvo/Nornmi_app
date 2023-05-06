import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const {cartQuantity} = useCart()

    return (
        <div>
            <ShoppingCartIcon sx={{color:"#435C52"}}/>
            <span>{cartQuantity () || ''}</span>
        </div>
    )
}

export default CartWidget;


