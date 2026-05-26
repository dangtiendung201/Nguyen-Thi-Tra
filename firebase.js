import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCGDjzUXl47rBjM7Lmz0ZJAe-F9f9U6N4A",
    authDomain: "nguyen-thi-tra.firebaseapp.com",
    projectId: "nguyen-thi-tra",
    storageBucket: "nguyen-thi-tra.firebasestorage.app",
    messagingSenderId: "1085990834449",
    appId: "1:1085990834449:web:f917e5ead4adff4e863cb0",
    measurementId: "G-VM056TTHV1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };