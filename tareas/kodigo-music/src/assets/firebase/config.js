// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVSD1FZ3if0UQWPFeLDM-eMinHeTJV8ks",
  authDomain: "kodigo-music-7cf8d.firebaseapp.com",
  projectId: "kodigo-music-7cf8d",
  storageBucket: "kodigo-music-7cf8d.appspot.com",
  messagingSenderId: "748643603269",
  appId: "1:748643603269:web:d02e4004313c378eeda42c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Si nuestra aplicacion tiene permisos para autenticar
