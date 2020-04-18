import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'catchoftheday-7c7ec.firebaseapp.com',
  databaseURL: 'https://catchoftheday-7c7ec.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;