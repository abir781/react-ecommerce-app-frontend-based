// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtFYvcOeXZeEb9Fd_9ibp9a0X7y8Rcpw8",
  authDomain: "hollowcast.firebaseapp.com",
  projectId: "hollowcast",
  storageBucket: "hollowcast.firebasestorage.app",
  messagingSenderId: "312590768482",
  appId: "1:312590768482:web:cf95f169a5fd5657ae743b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();