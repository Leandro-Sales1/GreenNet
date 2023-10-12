// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4clo4CZ8mMD6NCGe3v7GP01L7VM1qB3Q",
    authDomain: "greennet-bff41.firebaseapp.com",
    databaseURL: "https://greennet-bff41-default-rtdb.firebaseio.com",
    projectId: "greennet-bff41",
    storageBucket: "greennet-bff41.appspot.com",
    messagingSenderId: "230765988520",
    appId: "1:230765988520:web:45f94364886f156388909d",
    measurementId: "G-87K9ER6EXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;