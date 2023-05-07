import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import './Cart.css';
import Checkout from '../../pages/Checkout/Checkout';

const Cart = () => {
    const { cart, cartTotal, emptyCart} = useCart();
    const navigate = useNavigate();
    console.log(cart);

    return (
        <div className='CartContainer'>
        {!cart.length ? (
            <div className='EmptyCart'>
                <h2>Your shopping bag is empty</h2>
                <h4>We invite you to see our products</h4>
                <button onClick={() => navigate('/shop')}> Go shopping</button>
            </div>
        ) : (
            <div className='FullCart'>
                <h2>Your bag</h2>
                {cart.map((compra) => (
                    <CartItem key={compra.id} compra={compra} />
                ))}
                <span>Total : ${cartTotal()}</span>
                <div className='btnContainer'>
                    <button className='Btn' onClick={emptyCart}> Clear bag </button>
                    <button className='Btn' onClick={<Checkout />}> Finish </button>
                </div>
            </div>
        )}
        </div>
    );
};

export default Cart;