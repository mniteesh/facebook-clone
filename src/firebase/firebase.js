// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBt4JY1AjSsTayFwDKk5vtkk_3Y6FP8fko",
  authDomain: "facbook-clone-10e93.firebaseapp.com",
  projectId: "facbook-clone-10e93",
  storageBucket: "facbook-clone-10e93.appspot.com",
  messagingSenderId: "544920620787",
  appId: "1:544920620787:web:12961faa6ee846d811b186",
  measurementId: "G-MYWEME1RNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  
  const db = getFirestore(app) ;
  const auth = getAuth(app) ;
  const provider = new GoogleAuthProvider();

  export {auth, provider} ;
  export default db ;