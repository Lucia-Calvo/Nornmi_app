import React from 'react';
import "./NavBar.css";
import Logo from "./Nornmi-1.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';


const NavBar = () => {
    const {cart} =  useCart();

    return (
        <nav className="Navbar">
            <img className="Logo" src={Logo} alt="logo"/>
            <ul className="Navbar__item">
                <Link className="Navbar__link" to="/home">Home</Link>
                <Link className="Navbar__link" to="/shop">Shop</Link>
                <Link className="Navbar__link" to="/about">About us</Link>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar


