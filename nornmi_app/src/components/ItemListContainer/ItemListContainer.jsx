import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import {Link} from "react-router-dom";

//Import Component
import CardUser from '../CardUser/CardUser';

//Import Firebase
import { db } from '../../firebase/FirebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [vitamins, setVitamins] = useState([]);

    const q = query(collection(db, "Vitamins"));

    useEffect(() => {
        const getVitamins = async() => {
                const querySnapshot = await getDocs(q);
                const docs = [];
                querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setVitamins(docs)
            }
        getVitamins();
    }, [])

    return (
        <div className='CardUsers'>
            {vitamins.map(vitamin => {
                return(
                    <div key={vitamin.id}> 
                        <Link to={`/item/${vitamin.id}`}>
                            <CardUser data={vitamin}/>
                        </Link>
                    </div>
                    
                )
            })}
        </div>
    )
}

export default ItemListContainer;