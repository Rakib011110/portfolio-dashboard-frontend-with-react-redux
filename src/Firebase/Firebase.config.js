// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCX_mSAWDNtosmFf5fJG-SORMiCO7dKIP8",
    authDomain: "protfolio-28902.firebaseapp.com",
    projectId: "protfolio-28902",
    storageBucket: "protfolio-28902.appspot.com",
    messagingSenderId: "831434307859",
    appId: "1:831434307859:web:43ee2ac672b84da88e42e6",
    measurementId: "G-754DHH08WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
const analytics = getAnalytics(app);