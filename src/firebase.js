import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1pezl8uRNVjTDYVWbNTaBd3I1ZbnXRmE",
    authDomain: "twitter-clone-udemy-842e4.firebaseapp.com",
    projectId: "twitter-clone-udemy-842e4",
    storageBucket: "twitter-clone-udemy-842e4.appspot.com",
    messagingSenderId: "296517610453",
    appId: "1:296517610453:web:4a603ebdfd0dab0d1a6b5c"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;