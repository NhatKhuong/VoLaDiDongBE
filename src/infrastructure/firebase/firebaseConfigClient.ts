// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjDcFUYpIHUmA-b3Nqn3PVbJaJBvJUjaM",
  authDomain: "appchat-7232e.firebaseapp.com",
  projectId: "appchat-7232e",
  storageBucket: "appchat-7232e.appspot.com",
  messagingSenderId: "983402532649",
  appId: "1:983402532649:web:252da93aca98404b31f138",
  measurementId: "G-E6N2QSP808"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
