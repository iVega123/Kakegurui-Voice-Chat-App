import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQC4A3YQOuA5zz4m7COiOTf4PvHZSH3SY",
    authDomain: "kakeguruidiscord.firebaseapp.com",
    projectId: "kakeguruidiscord",
    storageBucket: "kakeguruidiscord.appspot.com",
    messagingSenderId: "482045069636",
    appId: "1:482045069636:web:3af90e2314fad20d7faf11",
    measurementId: "G-NE2P0MWF0B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;