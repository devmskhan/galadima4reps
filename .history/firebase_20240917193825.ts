// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZT3O1rFbMctr4uW7Za9_RuottaIWQE0",
  authDomain: "galadima-s-membership-form.firebaseapp.com",
  projectId: "galadima-s-membership-form",
  storageBucket: "galadima-s-membership-form.appspot.com",
  messagingSenderId: "424491154246",
  appId: "1:424491154246:web:5a6de93424623f4e9c8347",
  measurementId: "G-VDVPRW5HC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };