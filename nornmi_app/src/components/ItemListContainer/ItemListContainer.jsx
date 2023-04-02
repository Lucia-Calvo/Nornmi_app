import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardUser from '../CardUser/CardUser';
import "./ItemListContainer.css";
import {Link} from "react-router-dom";

const ItemListContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then((res) => 
        setUsers(res.data))
    }, [])

    return (
        <div className="CardUsers">
            {users.map((user) => {
                return (
                    <div className='CardContainer' key={user.id}>
                        <Link to={`/item/${user.id}`}><CardUser data={user}/></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer;