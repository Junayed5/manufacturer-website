// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2zTOfl1maHTN3nNZZMbyGlVToGykBTUs",
  authDomain: "computer-parts-manufactu-5503f.firebaseapp.com",
  projectId: "computer-parts-manufactu-5503f",
  storageBucket: "computer-parts-manufactu-5503f.appspot.com",
  messagingSenderId: "474154091176",
  appId: "1:474154091176:web:8736eb10702faaae38f89d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;