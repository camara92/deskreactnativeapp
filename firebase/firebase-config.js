// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'; 
// import {getFirestore} from 'firebase/firestore/lite'; 

const firebaseConfig = {
  apiKey: "AIzaSyA4CorH8OhvnZpLP7D-zpIZtRMOxVndycI",
  authDomain: "atlascourse-db29a.firebaseapp.com",
  projectId: "atlascourse-db29a",
  storageBucket: "atlascourse-db29a.appspot.com",
  messagingSenderId: "1019539544513",
  appId: "1:1019539544513:web:0527552be7786c0bf13740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentification  = getAuth(app);
export const db= getFirestore(app); 