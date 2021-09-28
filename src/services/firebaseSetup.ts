import firebase from 'firebase/compat'
import "firebase/auth";
import initializeApp = firebase.initializeApp

const firebaseConfig = {
  apiKey: "AIzaSyCT1q1kifyFEgaHeHIiwUFtxt0OwOqd8VE",
  authDomain: "subscription-manager-f2ce9.firebaseapp.com",
  projectId: "subscription-manager-f2ce9",
  storageBucket: "subscription-manager-f2ce9.appspot.com",
  messagingSenderId: "101952591462",
  appId: "1:101952591462:web:c7098adca70ec0b94d3fa7",
  measurementId: "G-LKY3YLYD29"
};

const app = initializeApp(firebaseConfig);
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore();

export { app, auth, provider, db }
