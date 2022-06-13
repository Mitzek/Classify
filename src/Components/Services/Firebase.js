import firebase from 'firebase/compat/app';
import'firebase/compat/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXFyjedNtS7n5Zg8SdmuLQTBTb3eU2wDg",
  authDomain: "classify-50003.firebaseapp.com",
  projectId: "classify-50003",
  storageBucket: "classify-50003.appspot.com",
  messagingSenderId: "774033422887",
  appId: "1:774033422887:web:ba0782baa68731123e6c02",
  measurementId: "G-8BFXZ8H5D6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage(); 

export { storage, firebase as default}