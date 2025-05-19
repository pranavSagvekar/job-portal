// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE2qkn-7gd4hSTv8pDYANNkNtoDsMaobw",
  authDomain: "online-job-portal-6c628.firebaseapp.com",
  projectId: "online-job-portal-6c628",
  storageBucket: "online-job-portal-6c628.firebasestorage.app",
  messagingSenderId: "1081486573147",
  appId: "1:1081486573147:web:8ea0da65eae2b75517097e",
  measurementId: "G-F4F5BZZQ02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export {db};
export {auth}