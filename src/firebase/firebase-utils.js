import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChnrz8UIf3W3rec0bQL4NtDIaQtUgp6Y4",
  authDomain: "spades-clothing.firebaseapp.com",
  databaseURL: "https://spades-clothing.firebaseio.com",
  projectId: "spades-clothing",
  storageBucket: "spades-clothing.appspot.com",
  messagingSenderId: "385061379606",
  appId: "1:385061379606:web:f1e237e1aa635660fb9f37",
  measurementId: "G-XJ8FCLK06K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
