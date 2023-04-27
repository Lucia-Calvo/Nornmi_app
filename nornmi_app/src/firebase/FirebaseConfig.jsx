// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyA68B9HZySwKRUtAs33LqQohN6yFybFwR0",
    authDomain: "nornmi-ecommerce.firebaseapp.com",
    projectId: "nornmi-ecommerce",
    storageBucket: "nornmi-ecommerce.appspot.com",
    messagingSenderId: "287589182574",
    appId: "1:287589182574:web:6d97888535c33153bb4a7f"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);