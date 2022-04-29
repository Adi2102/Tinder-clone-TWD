import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFbvDQbqdCqeRKcCfiec12_uhIGGBxzUE",
  authDomain: "tinder-clone-twd-adi.firebaseapp.com",
  projectId: "tinder-clone-twd-adi",
  storageBucket: "tinder-clone-twd-adi.appspot.com",
  messagingSenderId: "578765846618",
  appId: "1:578765846618:web:216855fe82dba704934063",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
