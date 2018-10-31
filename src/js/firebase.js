// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDsfk0M5QKKKUYOJ4mqAzK_KB6ICwCXWeA",
  authDomain: "americatv-ads.firebaseapp.com",
  databaseURL: "https://americatv-ads.firebaseio.com",
  projectId: "americatv-ads",
  storageBucket: "americatv-ads.appspot.com",
  messagingSenderId: "507467215527"
});

const auth = firebase.auth();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

//función registro
const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);
// función inicio de sesión
const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

const saveUser = (user) => db.doc(`users/${user.uid}`).set(user);
