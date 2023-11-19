import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc0Q3_HcHvkgldcr5uWdtnUsjiHoMB1cI",
  authDomain: "react-journal-app-efddf.firebaseapp.com",
  projectId: "react-journal-app-efddf",
  storageBucket: "react-journal-app-efddf.appspot.com",
  messagingSenderId: "805109611973",
  appId: "1:805109611973:web:b1dcd00618fe640d95dfac",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
