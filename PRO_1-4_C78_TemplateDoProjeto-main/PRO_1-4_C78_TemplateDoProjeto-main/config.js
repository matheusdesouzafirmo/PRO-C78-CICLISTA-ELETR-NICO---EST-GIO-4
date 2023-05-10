import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBEQ5oG8-ReIUu0Wy8qGQuzz3cPKyZXidA",
    authDomain: "projeto-39981.firebaseapp.com",
    databaseURL: "https://projeto-39981-default-rtdb.firebaseio.com",
    projectId: "projeto-39981",
    storageBucket: "projeto-39981.appspot.com",
    messagingSenderId: "67167693397",
    appId: "1:67167693397:web:8cff6112301d1b2179c2dc"
  };
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
