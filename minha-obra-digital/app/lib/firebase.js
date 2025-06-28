import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN4scwNv27GPFBZuvAXeWpIQv1Up6vA5E",
  authDomain: "minha-obra-digitaly.firebaseapp.com",
  projectId: "minha-obra-digitaly",
  storageBucket: "minha-obra-digitaly.firebasestorage.app",
  messagingSenderId: "753527693339",
  appId: "1:753527693339:web:cd121ead6e47f5e30c58be",
  measurementId: "G-32FCR1NQRT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
