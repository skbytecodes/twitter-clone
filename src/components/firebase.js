import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAn8ZCHLZ9Tuqzt7w0xQXjvS9lly5-e4aA",
  authDomain: "twitter-clone-408ab.firebaseapp.com",
  projectId: "twitter-clone-408ab",
  storageBucket: "twitter-clone-408ab.appspot.com",
  messagingSenderId: "120494092859",
  appId: "1:120494092859:web:5e4afa552fd6edde10621e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;