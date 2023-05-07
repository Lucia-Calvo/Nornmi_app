import React, {useState} from 'react';
import './Checkout.css'

//Import Firebase
import { db } from '../../firebase/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore";

//Material UI
import TextField from "@mui/material/TextField";

import MessageSuccess from '../../components/MessageSuccess/MessageSuccess';

const initialState = {
    name: "",
    lastName: "",
    email: "",
};

const Checkout = () => {
    const [values, setValues] = useState(initialState);

    const [purchaseID, setPurchaseID] = useState("");

    const onChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "purchases"), {
        values,
        });
        setPurchaseID(docRef.id);
        setValues(initialState);
    };

    return (
        <div className='FormContainer'>
            <h1>Please, complete with your personal information</h1>
            <form className="FormContainer" onSubmit={onSubmit}>
                <TextField
                placeholder="Name"
                style={{ margin: 10, width: 400 }}
                name="name"
                value={values.name}
                onChange={onChange}
                />
                <TextField
                placeholder="Last Name"
                style={{ margin: 10, width: 400 }}
                name="lastName"
                value={values.lastName}
                onChange={onChange}
                />
                <TextField
                placeholder="Email"
                style={{ margin: 10, width: 400 }}
                name="email"
                value={values.email}
                onChange={onChange}
                />
                <button className="btnASendAction btn" type="submit"> Send </button>
            </form>
            {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
        </div>
    )
}

export default Checkout