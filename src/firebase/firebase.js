import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCdOPgc-RpClKhFVmGRgQtB63nRumEXDnE",
    authDomain: "donghoaspa-fa7d4.firebaseapp.com",
    projectId: "donghoaspa-fa7d4",
    storageBucket: "donghoaspa-fa7d4.appspot.com",
    messagingSenderId: "66380678485",
    appId: "1:66380678485:web:ffa4f11b0aec2513869bdc",
    measurementId: "G-6X5RXV1W58"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };