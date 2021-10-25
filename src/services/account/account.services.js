// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAaBRIIPDFgkMiZjsyeotaOHpUWxxAN4RQ",
	authDomain: "foodlee-998a9.firebaseapp.com",
	projectId: "foodlee-998a9",
	storageBucket: "foodlee-998a9.appspot.com",
	messagingSenderId: "132204122104",
	appId: "1:132204122104:web:f589c72baaeccac162100d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const fetchUser = (email, password) =>{
	return signInWithEmailAndPassword(auth, email, password)
	.then((userCredent) => userCredent.user)
	.catch((e) => console.log(e));
}
