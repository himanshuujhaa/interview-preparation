// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsn7LDDgyDeBPlr4dW2iEtn4EHNrOQNdM",
    authDomain: "interview-preparation-1.firebaseapp.com",
    projectId: "interview-preparation-1",
    storageBucket: "interview-preparation-1.firebasestorage.app",
    messagingSenderId: "992931176573",
    appId: "1:992931176573:web:5ef1d5036648576ee01114",
    measurementId: "G-HHNBMBM2YD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);