// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUXzUPCu8gJmE2XtcB1yIXs0qcSQ1yNaQ",
  authDomain: "chatapp-4f017.firebaseapp.com",
  projectId: "chatapp-4f017",
  storageBucket: "chatapp-4f017.appspot.com",
  messagingSenderId: "916191459953",
  appId:"1:916191459953:web:64d027f54fbd2fac9139d0"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)