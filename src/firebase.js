import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCL1jDUO_8j49owDj9a1WuzF6TGHZSj218",
  authDomain: "blog-bd96f.firebaseapp.com",
  projectId: "blog-bd96f",
  storageBucket: "blog-bd96f.appspot.com",
  messagingSenderId: "60866480846",
  appId: "1:60866480846:web:ec80d096c74c67aa711e9f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firestore = firestore;
