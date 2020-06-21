import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnkbPFbQotu6COpTU1FRQFpJ_40Qaue_A",
    authDomain: "crwn-clothing-db-3b3ad.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-3b3ad.firebaseio.com",
    projectId: "crwn-clothing-db-3b3ad",
    storageBucket: "crwn-clothing-db-3b3ad.appspot.com",
    messagingSenderId: "910324676769",
    appId: "1:910324676769:web:293532b58ae55e3e9258e0",
    measurementId: "G-0X97Z6BTDG"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
