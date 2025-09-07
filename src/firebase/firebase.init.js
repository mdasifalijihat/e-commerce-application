// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbX2uLYqW_NzOVWETc10j9KwTaX7hdlYA",
  authDomain: "e-commerce-bd-dd829.firebaseapp.com",
  projectId: "e-commerce-bd-dd829",
  storageBucket: "e-commerce-bd-dd829.firebasestorage.app",
  messagingSenderId: "859365682616",
  appId: "1:859365682616:web:cc516ec123bc4a001db34d",
  measurementId: "G-J7L6GHLV0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);