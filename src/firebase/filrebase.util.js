import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

require('dotenv').config({
  path: '.env.local',
});

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
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

export const createUserProfileDocument = async (userAuth, otherData) => {
  // 每一次用户登陆才会跳进这个方法, 在app.js里面 ps,明明没有设置useEffect触发条件却能触发,,不太懂

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // query doc就 得到/进入 了这个用户的reference

  const userSnapShot = (await userRef.get()); // 用上面的到的referenct去数据库里提取有关信息存为 snapshot
  //   console.log('userSnapShot,', userSnapShot);
  if (!userSnapShot.exists) { // if this user never register b4, which will not exist in our firebase db, then exist is false
    const { displayName, email } = userAuth;
    const createDate = new Date();
    // console.log(displayName, email);
    try { // create a new entry in our firebase database (create new user)
      await userRef.set({ // 这里是把google firebase sign in 的信息set into firebase database storage
        displayName,
        email,
        createDate,
        ...otherData,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => (
  auth.signInWithPopup(provider)
);

export default firebase;
