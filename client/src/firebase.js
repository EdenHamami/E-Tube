import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth" 
const firebaseConfig = {
  apiKey: "AIzaSyBpHRrxQWUC7KT1hhr5EVfIC3dgjIsCLsk",
  authDomain: "video-ccb26.firebaseapp.com",
  projectId: "video-ccb26",
  storageBucket: "video-ccb26.appspot.com",
  messagingSenderId: "734017249264",
  appId: "1:734017249264:web:9c314f2024346f4f950735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const provider=new GoogleAuthProvider()
export default app;