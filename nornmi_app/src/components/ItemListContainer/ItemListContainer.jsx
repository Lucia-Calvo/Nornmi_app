import React, {useState, useEffect} from 'react';
import CardUser from '../CardUser/CardUser';
import "./ItemListContainer.css";
import {Link} from "react-router-dom";

//Import Firebase
import { db } from './firebase/FirebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
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

    return (
        <div></div>
    )
}

export default ItemListContainer;