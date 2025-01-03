import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBX3n_cExX5n_r_q9dUN04g3h1MjqW_gJQ",
  authDomain: "cyberhouse-web.firebaseapp.com",
  projectId: "cyberhouse-web",
  storageBucket: "cyberhouse-web.appspot.com",
  messagingSenderId: "811341608142",
  appId: "1:811341608142:web:8b0e6f3064519601080c9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;