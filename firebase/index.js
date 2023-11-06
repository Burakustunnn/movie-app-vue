
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBF2ES5BCTGjA6SLkZjf6fZCFB1vNMl4PI",
  authDomain: "movie-app-587cd.firebaseapp.com",
  projectId: "movie-app-587cd",
  storageBucket: "movie-app-587cd.appspot.com",
  messagingSenderId: "966032611054",
  appId: "1:966032611054:web:2fc38c433d3a68a03445ff"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
