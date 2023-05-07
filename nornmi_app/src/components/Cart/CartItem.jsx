import React from 'react';
import { useCart } from '../../context/CartContext';
import './Cart.css'

const CartItem = ({ compra }) => {
    const { removeItem, removeItem2 } = useCart();
    return (
        <div className='ItemContainer'>
            <span>Product: {compra.name}</span>
            <span>Qty: {compra.quantity}</span>
            <span>Price: ${compra.price}</span>
            <button className="Btn button" onClick={() => removeItem2(compra.id)}> Clear item </button>
        </div>
    );
};

export default CartItem