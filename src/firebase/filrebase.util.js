import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAqAfSJ0Qiu1tjkLZQtsXvDM2Ro5MnroZo',
  authDomain: 'react-practice-d680d.firebaseapp.com',
  databaseURL: 'https://react-practice-d680d.firebaseio.com',
  projectId: 'react-practice-d680d',
  storageBucket: 'react-practice-d680d.appspot.com',
  messagingSenderId: '182342121380',
  appId: '1:182342121380:web:408b30d2b778ff02ee7331',
  measurementId: 'G-MZTHS2MDPW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => (
  auth.signInWithPopup(provider)
);
export default firebase;
