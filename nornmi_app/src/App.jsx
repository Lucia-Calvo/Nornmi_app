import React, {useEffect, useState} from 'react';
import './App.css';

//React Router Dom
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Import pages
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

//Import components
import NavBar from "./components/NavBar/NavBar"; 
import Cart from './components/Cart/Cart';

//Import context
// import { CartProvider } from './context/CartContext';

const App = () => {
  return(

      <Router>
        <div className='App'>
          <NavBar />
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>

  )   
}

export default App





