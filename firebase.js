
import firebase from 'firebase/app';
import 'firebase/auth'; // importing the auth module as an example

// Firebase web config
const config = {
  // apiKey: '',
  // authDomain: '',
  // databaseURL: '',
  // projectId: '',
  // storageBucket: '',
  // messagingSenderId: '',
  // appId: '',
  // measurementId: '',
}

let instance = null;

export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}