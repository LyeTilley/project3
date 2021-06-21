import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCCS8G6oDSlmh0PGCD2ceq5KUBIXAHD-sE",
  authDomain: "project3-ccc65.firebaseapp.com",
  databaseURL: "https://project3-ccc65-default-rtdb.firebaseio.com",
  projectId: "project3-ccc65",
  storageBucket: "project3-ccc65.appspot.com",
  messagingSenderId: "733384936999",
  appId: "1:733384936999:web:8a677555801d1ef3e64802",
  measurementId: "G-DZFRN65EEF"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
