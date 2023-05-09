import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';;



const firebaseConfig = {
    apiKey: "AIzaSyAbdGgKO6laqKvHXOJw3VaPp8NO656wOXU",
    authDomain: "netflix-clone-3735f.firebaseapp.com",
    projectId: "netflix-clone-3735f",
    storageBucket: "netflix-clone-3735f.appspot.com",
    messagingSenderId: "134764492086",
    appId: "1:134764492086:web:24bd1e432fd657186d6f97"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

export { auth, db };