// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbEQchpqyfmBWkoHKOE0IQZdVk7QFqqyg",
  authDomain: "food-delivery-app-b1c71.firebaseapp.com",
  projectId: "food-delivery-app-b1c71",
  storageBucket: "food-delivery-app-b1c71.firebasestorage.app",
  messagingSenderId: "1055873142665",
  appId: "1:1055873142665:web:7a7ea316274adc877bdb58",
  measurementId: "G-65JV0HCJXJ",
  databaseUrl: "https://food-delivery-app-b1c71-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };