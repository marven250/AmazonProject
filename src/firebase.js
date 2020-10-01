import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwVBzAxrEU9deWkMan5fLbNoum72dOI8Q",
  authDomain: "clone-17017.firebaseapp.com",
  databaseURL: "https://clone-17017.firebaseio.com",
  projectId: "clone-17017",
  storageBucket: "clone-17017.appspot.com",
  messagingSenderId: "12289075680",
  appId: "1:12289075680:web:053d347dc6fa614d53a385",
  measurementId: "G-XNQH8DJE0H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
