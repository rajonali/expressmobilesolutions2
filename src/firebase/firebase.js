import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAuRrRnfsow9sF9Zz1m3MP0UexpqezLgs0",
  authDomain: "quik-scan-48173.firebaseapp.com",
  databaseURL: "https://quik-scan-48173.firebaseio.com",
  projectId: "quik-scan-48173",
  storageBucket: "quik-scan-48173.appspot.com",
  messagingSenderId: "794653902744",
  appId: "1:794653902744:web:9fe7de42f3135d3faf0ded"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth,
};