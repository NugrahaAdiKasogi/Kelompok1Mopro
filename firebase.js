// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBviqNFb8Zp6Eow7OMXyIITKfOzztu3I98",
  authDomain: "laundryapp-18a0e.firebaseapp.com",
  projectId: "laundryapp-18a0e",
  storageBucket: "laundryapp-18a0e.appspot.com",
  messagingSenderId: "109338914018",
  appId: "1:109338914018:web:17dcdd32c5d31bccc742bb",
  measurementId: "G-CHB4WCZNFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { auth, db };
