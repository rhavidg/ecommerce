import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwgMq1NHaVW-GVmVrMEIAj8g-NFgLQpAE",
  authDomain: "fir-react-auth-acf53.firebaseapp.com",
  projectId: "fir-react-auth-acf53",
  storageBucket: "fir-react-auth-acf53.appspot.com",
  messagingSenderId: "182025061877",
  appId: "1:182025061877:web:295c9770219df1aea0ccbc",
  measurementId: "G-3194PJCDE8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
