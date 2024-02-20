import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtReFc4sH7pgUcZgq0NVPNzQfko2YMtk",
  authDomain: "coderhouse-proyecto-fina-5aa45.firebaseapp.com",
  projectId: "coderhouse-proyecto-fina-5aa45",
  storageBucket: "coderhouse-proyecto-fina-5aa45.appspot.com",
  messagingSenderId: "535020278237",
  appId: "1:535020278237:web:890250bb0537cf4470e634"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
