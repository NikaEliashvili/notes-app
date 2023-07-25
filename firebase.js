import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZB0Cm9Dn0X1aUQXY8sR5VgocV6eNJSc",
  authDomain: "react-notes-92fcf.firebaseapp.com",
  projectId: "react-notes-92fcf",
  storageBucket: "react-notes-92fcf.appspot.com",
  messagingSenderId: "99101497856",
  appId: "1:99101497856:web:295aca795c4951a6e856e5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
