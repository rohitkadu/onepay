// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnYeoNjl3vn_qTEoSuvUzzsu-3IoYPxKY",
  authDomain: "onepay-rohit.firebaseapp.com",
  projectId: "onepay-rohit",
  storageBucket: "onepay-rohit.appspot.com",
  messagingSenderId: "627558555390",
  appId: "1:627558555390:web:7784bbee8d63536190cfaf",
  measurementId: "G-E2DHY69YRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;