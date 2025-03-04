
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatreact-8c684.firebaseapp.com",
  projectId: "chatreact-8c684",
  storageBucket: "chatreact-8c684.firebasestorage.app",
  messagingSenderId: "536762492210",
  appId: "1:536762492210:web:132691b134bc90cf63632b",
  measurementId: "G-36YM43YQ42"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()