import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

firebase.initializeApp({
    apiKey: "AIzaSyC_cFqafPcINEdIkwQWVcmBj_NK-T_jPcw",
    authDomain: "palestine-forum.firebaseapp.com",
    projectId: "palestine-forum",
    storageBucket: "palestine-forum.appspot.com",
    messagingSenderId: "47166487007",
    appId: "1:47166487007:web:f24b2f8b231c3d7d81ac6a",
    measurementId: "${config.measurementId}"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export{auth,firestore,firebase}