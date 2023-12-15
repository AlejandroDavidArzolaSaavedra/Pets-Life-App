// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDEQizNb5XzqzQdyO-PsyolD50Q5bdIS1o",
    authDomain: "myapp3-c3cca.firebaseapp.com",
    projectId: "myapp3-c3cca",
    storageBucket: "myapp3-c3cca.appspot.com",
    messagingSenderId: "454349153267",
    appId: "1:454349153267:web:38e00a652f78fc314de886"
  }
  
};

// Initialize Firebase

const app = initializeApp(environment.firebaseConfig);
const autentication = getAuth(app);