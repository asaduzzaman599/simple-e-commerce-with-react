// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Sutpdetovb5bH1t-2m_nsAyGKqBdWsE",
  authDomain: "simple-e-commerce-with-react.firebaseapp.com",
  projectId: "simple-e-commerce-with-react",
  storageBucket: "simple-e-commerce-with-react.appspot.com",
  messagingSenderId: "593832671277",
  appId: "1:593832671277:web:e7d459ae8e057d6e3660a4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export default app;