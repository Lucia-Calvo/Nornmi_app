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

//Import Firebase
import { db } from './firebase/FirebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";


const App = () => {
  const [vitamins, setVitamins] = useState([]);

  const q = query(collection(db, "Vitamins"));

  useEffect(() => {
      const getVitamins = async() => {
              const querySnapshot = await getDocs(q);
              const docs = [];
              querySnapshot.forEach((doc) => {
              // console.log(doc.data())
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              docs.push({...doc.data(), id: doc.id})
          });
          console.log(docs)
        }
      getVitamins();
  }, [])


  return(
    <Router>
      <div className='App'>
        <NavBar />
        <Routes> 
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />  
        </Routes>
      </div>
    </Router>
  )   
}

export default App





