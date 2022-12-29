
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1w7JtSHooN5Jl2RjlK2Vq8z44zcac6bA",
  authDomain: "experai-task.firebaseapp.com",
  projectId: "experai-task",
  storageBucket: "experai-task.appspot.com",
  messagingSenderId: "79464595831",
  appId: "1:79464595831:web:519b596482062ce240a172",
  measurementId: "G-KB2SXCHW6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth,app};