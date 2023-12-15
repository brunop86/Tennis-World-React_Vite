import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuRc3vWB-x27xdHzfSQ_4KL7BG5dgMLB4",
  authDomain: "e-commerce-project-58175.firebaseapp.com",
  projectId: "e-commerce-project-58175",
  storageBucket: "e-commerce-project-58175.appspot.com",
  messagingSenderId: "1059293603068",
  appId: "1:1059293603068:web:3c09fe55512ade9c702379",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
