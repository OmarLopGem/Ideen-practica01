import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCu5da6keHqYeFFTeCuIgA3tVFVf1oL-Ug",
  authDomain: "practica-01-ideen-ac2e0.firebaseapp.com",
  projectId: "practica-01-ideen-ac2e0",
  storageBucket: "practica-01-ideen-ac2e0.appspot.com",
  messagingSenderId: "610951384450",
  appId: "1:610951384450:web:95536b8267dc44df01539b",
  measurementId: "G-6H8KDF0HSX"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;
