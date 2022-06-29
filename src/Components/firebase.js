import firebase from "firebase";
import "firebase/auth"
import 'firebase/firestore';
import '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAyw9nDQFg6qIwtX63vptnjh6Tfe8w3zWI",
  authDomain: "ecommercea-c3dcb.firebaseapp.com",
  projectId: "ecommercea-c3dcb",
  storageBucket: "ecommercea-c3dcb.appspot.com",
  messagingSenderId: "298032112722",
  appId: "1:298032112722:web:23d481c23d67727773ab8b",
  measurementId: "G-XEK2LYGE8F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };