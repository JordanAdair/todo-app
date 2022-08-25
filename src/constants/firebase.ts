import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Firebase BaaS (Authentication, Storage, and Analytics) configuration information
export const firebaseConfig = {
	apiKey: "AIzaSyBASrKMLsJF-6tZOARc8a7mB1faQqj3EOU",
	authDomain: "todo-app-cbf59.firebaseapp.com",
	projectId: "todo-app-cbf59",
	storageBucket: "todo-app-cbf59.appspot.com",
	messagingSenderId: "1099496967892",
	appId: "1:1099496967892:web:6e8e6ecc72a51c26a7f541",
	measurementId: "G-S5YKFHQXMH",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

