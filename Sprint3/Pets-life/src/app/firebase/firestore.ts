import firebaseConfig from "./firebaseConfig";
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app)