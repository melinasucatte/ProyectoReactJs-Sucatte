import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAxDV8T2TDxNAXk6FlpYbyVsQGC7IFzT_4",
  authDomain: "tuamigofiel-2987d.firebaseapp.com",
  projectId: "tuamigofiel-2987d",
  storageBucket: "tuamigofiel-2987d.appspot.com",
  messagingSenderId: "393188714368",
  appId: "1:393188714368:web:24266db4da56a45efe8365"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app