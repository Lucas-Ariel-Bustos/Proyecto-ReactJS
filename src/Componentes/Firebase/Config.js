// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-vFRYUP-OOUdzpwGrTv34ZAzA4nXf2Ys",
  authDomain: "primer-trabajo-react-js.firebaseapp.com",
  projectId: "primer-trabajo-react-js",
  storageBucket: "primer-trabajo-react-js.appspot.com",
  messagingSenderId: "912220049540",
  appId: "1:912220049540:web:c2d1d68c56c1d43800f2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);