// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnb3dMN0aQatBNDcQm6ajp1iM-RAXLyjQ",
  authDomain: "blog-9dcf0.firebaseapp.com",
  projectId: "blog-9dcf0",
  storageBucket: "blog-9dcf0.appspot.com",
  messagingSenderId: "959929606617",
  appId: "1:959929606617:web:1e0ee9d2b59e2a1e8f39c8",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
