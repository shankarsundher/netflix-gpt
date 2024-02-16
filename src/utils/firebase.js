// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfp_Hwpj0IAD_2d1zO_FTt7A50RVFCens",
  authDomain: "netflixgpt-f976d.firebaseapp.com",
  projectId: "netflixgpt-f976d",
  storageBucket: "netflixgpt-f976d.appspot.com",
  messagingSenderId: "259599297839",
  appId: "1:259599297839:web:ec0d6f53e71bb1850005da",
  measurementId: "G-YSZX7WT1RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();