import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCWHLdArptsiEwxvVtF__4IlTlgigQcUzQ",
  authDomain: "react-a64f7.firebaseapp.com",
  projectId: "react-a64f7",
  storageBucket: "react-a64f7.appspot.com",
  messagingSenderId: "560671992755",
  appId: "1:560671992755:web:7509361babb8400d2839c6",
  measurementId: "G-GEJDXM80CV",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
