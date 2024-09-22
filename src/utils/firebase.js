// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkAbgqKFzApdOULUQ7WmI6lxasf01t4do",
  authDomain: "netflixgpt-b66df.firebaseapp.com",
  projectId: "netflixgpt-b66df",
  storageBucket: "netflixgpt-b66df.appspot.com",
  messagingSenderId: "1076567395647",
  appId: "1:1076567395647:web:65673025582409856f178a",
  measurementId: "G-LL9Q864QG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();