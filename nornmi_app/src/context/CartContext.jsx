import { createContext, useContext, useState } from "react";

export const CartContext = createContext(); 

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const itemInCart = cart.find((prod)=> prod.id === item.id)
        if(itemInCart){
            const upDatedCart = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else{
                    return prod
                }
            })
            setCart(upDatedCart)
        }else{
            setCart([...cart, item])
        }
    }
    const isInCart = (id) => { return cart.some((prod) => prod.id === id); };
    const emptyCart = () => { setCart([])};
    const removeItem = (id) => { setCart(cart.filter((prod) => prod.id !== id)); };
    const cartQuantity = () => { return cart.reduce((acc, prod) => (acc += prod.quantity), 0); };
    const cartTotal = () => { return cart.reduce((acc, prod) => (acc += prod.price * prod.quantity), 0); };
    const removeItem2 = (id) => {
        const index = cart.findIndex((item) => item.id === id);
        cart.splice(index, 1);
        setCart([...cart]);
    };

    return(
        <CartContext.Provider value={{cart, addToCart, isInCart, emptyCart, removeItem, cartQuantity, cartTotal, removeItem2}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext (CartContext);