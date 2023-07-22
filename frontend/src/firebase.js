import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJQ7MNnkqgkzE6NeWbsgNMDH9wajHU9Pg",
    authDomain: "webelight-4b32a.firebaseapp.com",
    projectId: "webelight-4b32a",
    storageBucket: "webelight-4b32a.appspot.com",
    messagingSenderId: "221461099839",
    appId: "1:221461099839:web:7e9ea652e88b1c92fd0f8a"
  };
  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);