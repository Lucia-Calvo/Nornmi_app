import React, { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser/CardUser';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [user, setUser] = useState ({});

    let {id} = useParams();

    useEffect (() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => 
        setUser(res.data))
    }, []);

    return (
        <div>
            <CardUser data={user}/>
        </div>
    )
}

export default ItemDetailContainer