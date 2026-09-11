import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCf2LMZJAhjJ8CjpMNdwjcxKz4s67_5oiU",
  authDomain: "projeto-react-puc.firebaseapp.com",
  projectId: "projeto-react-puc",
  storageBucket: "projeto-react-puc.firebasestorage.app",
  messagingSenderId: "53178804627",
  appId: "1:53178804627:web:f5637175d7f1d35416a066"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Authentication
const auth = getAuth(app);

// Inicializa o Firestore
const db = getFirestore(app);

// Disponibiliza para as outras páginas
export { auth, db };