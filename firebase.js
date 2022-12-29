import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAsa3dgH30JgdfMSUY-eHWa9LuIwZjd6MY",
  authDomain: "e1ijv-3e03b.firebaseapp.com",
  databaseURL: "https://e1ijv-3e03b-default-rtdb.firebaseio.com",
  projectId: "e1ijv-3e03b",
  storageBucket: "e1ijv-3e03b.appspot.com",
  messagingSenderId: "223303306217",
  appId: "1:223303306217:web:5744d5d7215564ce539978",
  measurementId: "G-K5D9DZJC70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);







