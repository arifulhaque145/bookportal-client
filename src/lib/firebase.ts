/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   apiKey: "AIzaSyD4DPyuABrOHyWy5XIlR6ZJp69id-yDhIw",
  //   authDomain: "bookportal-4f732.firebaseapp.com",
  //   projectId: "bookportal-4f732",
  //   storageBucket: "bookportal-4f732.appspot.com",
  //   messagingSenderId: "629375572455",
  //   appId: "1:629375572455:web:68cb9c8435c6fc8326c542",
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
