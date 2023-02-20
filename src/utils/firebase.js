
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD7Hq-PABv6VuZmVK9BSN1Xp38ZRDELl9w",
  authDomain: "fun-project-d50ad.firebaseapp.com",
  projectId: "fun-project-d50ad",
  storageBucket: "fun-project-d50ad.appspot.com",
  messagingSenderId: "385225055713",
  appId: "1:385225055713:web:eae05816d0aa3dc4b586a0"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
