import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCRSrZx7Ab_yRsFCasv4aAy6Efu7Ga3zdg",
    authDomain: "facebook-messenger-clone-957bb.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-957bb-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-957bb",
    storageBucket: "facebook-messenger-clone-957bb.appspot.com",
    messagingSenderId: "10598154439",
    appId: "1:10598154439:web:bb9ca6f47c15f14e0a3ee2",
    measurementId: "G-HY2FQ34J5T"
});
const db = firebaseApp.firestore();
export default db ;