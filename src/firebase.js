import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAwYyHPhAKAB5j_YFM-O5TYheF8JxmpEYA",
    authDomain: "chat-cabe9.firebaseapp.com",
    projectId: "chat-cabe9",
    storageBucket: "chat-cabe9.appspot.com",
    messagingSenderId: "1030357118828",
    appId: "1:1030357118828:web:e1236e05ab709467870d49",
    measurementId: "G-WHGFHPJW2J"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()