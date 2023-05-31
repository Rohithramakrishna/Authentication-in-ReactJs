// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//authentication
import { getAuth } from "firebase/auth";
//firebase database
import { getFirestore } from "firebase/firestore";
//firebase storage
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCrYIE4kn09uqVuEfcr8lUhpOXsGZd261M",
  authDomain: "makemytravel-2f156.firebaseapp.com",
  projectId: "makemytravel-2f156",
  storageBucket: "makemytravel-2f156.appspot.com",
  messagingSenderId: "928889448432",
  appId: "1:928889448432:web:339e5bff11db63b7551f35"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);
export let db = getFirestore(firebaseApp);
export let storage = getStorage(firebaseApp);

export default firebaseApp;
