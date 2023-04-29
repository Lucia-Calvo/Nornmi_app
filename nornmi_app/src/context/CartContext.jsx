// import { createContext, useContext, useState } from "react";

// export const CartContext = createContext(); 

// export const CartProvider = ({children}) => {
//     const [cart, setCart] = useState([]);

//     const AddToCart = (item) => {
//         setCart([...cart, item])
//     }

//     return(
//         <CartContext.Provider value={{cart, AddToCart}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export const UseCart = () => useContext (CartContext);