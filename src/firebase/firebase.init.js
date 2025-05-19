import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDFKemD9WstkymKwzAfdiguEB21iaM2EcA",
    authDomain: "plant-tracker-39c6e.firebaseapp.com",
    projectId: "plant-tracker-39c6e",
    storageBucket: "plant-tracker-39c6e.firebasestorage.app",
    messagingSenderId: "975838516855",
    appId: "1:975838516855:web:054ed3fa4c27c79e475872"
};

export const app = initializeApp(firebaseConfig);