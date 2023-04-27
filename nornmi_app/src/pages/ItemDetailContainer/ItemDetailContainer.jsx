import React, { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser/CardUser';

import { useParams } from 'react-router-dom';

//Import Firebase
import { db } from '../../firebase/FirebaseConfig';
import { collection, query, getDocs, where, documentId } from "firebase/firestore";


const ItemDetailContainer = () => {
    let {id} = useParams();
    const [vitamin, setVitamin] = useState({});
    const q = query(collection(db, "Vitamins"), where(documentId(),"==", id));

    useEffect(() => {
        const getVitamins = async() => {
                const querySnapshot = await getDocs(q);
                const docs = [];
                querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setVitamin(docs)
            }
        getVitamins();
    }, [])

    return (
        <div className='CardUsers'>
            <div key={vitamin.id}> 
                <CardUser data={vitamin}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer