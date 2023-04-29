import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//Import Firebase
import { db } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    let { id } = useParams();
    const [vitamin, setVitamin] = useState({});

    useEffect(() => {
        const getVitamin = async () => {
            const vitaminRef = doc(db, "Vitamins", id);
            const vitaminDoc = await getDoc(vitaminRef);
            if (vitaminDoc.exists()) {
                setVitamin(vitaminDoc.data());
            } else {
                console.log("No existe el documento con el id proporcionado.");
            }
        };
        getVitamin();
    }, [id]);
    

    return (
        <div className='CardUsers'>
            <div key={vitamin.id}>
                <ItemDetail data={vitamin} />
            </div>
        </div>
    );
};

export default ItemDetailContainer;