import { initializeApp, } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAj9maIPTgIgftlsVqLAD4UlPmc6asywA8",
  authDomain: "photography-852a7.firebaseapp.com",
  projectId: "photography-852a7",
  storageBucket: "photography-852a7.firebasestorage.app",
  messagingSenderId: "218559279090",
  appId: "1:218559279090:web:4ed72112805fcbe522856b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);