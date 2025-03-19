import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHY2WRfg5KD-9yWWVzZv23Ad_M3m5c2ZI",
    authDomain: "ttu-informs-chapter.firebaseapp.com",
    projectId: "ttu-informs-chapter",
    storageBucket: "ttu-informs-chapter.firebasestorage.app",
    messagingSenderId: "410447757231",
    appId: "1:410447757231:web:f7f3c445e7a013ab13b95a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// export
export { db, doc, getDoc, setDoc, deleteDoc };