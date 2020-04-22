import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Firestore is a NoSQL, document-oriented database unlike a SQL database, there are no tables or row, store data in document.
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

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => { // this is just for one time use to add collection into firebase
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch(); // Batch => bcs we can only do set call once at a time, so if one call fail, all will fail

  objectToAdd.forEach((element) => {
    const newDocRef = collectionRef.doc(); // tell firebase give/create for me new reference in this collection, create ur own key
    // originaly we will call this like : newDocRef.set(element), but reason is at 上面三行
    batch.set(newDocRef, element);
  });
  await batch.commit(); // this will submit all batch request at one, and will return a promise, once complet it will return a void value
};


export const convertCollectionsSnapShotToMap = (collection) => { // get info from snapshot of a collection of firebase
  // console.log('collection', collection);
  const transformedCollection = collection.docs.map((element) => {
    const { title, items } = element.data();
    return {
      routeName: encodeURI(title.toLowerCase()), // comes with js, pass into string, give back string that url can read, use title as route name as well
      id: element.id,
      title,
      items,
    };
  });

  // console.log('trnasformedCollection,', transformedCollection);
  // return transformedCollection;
  return transformedCollection.reduce((accumulator, element) => { // 这个只是把它变好看一点,把title弄成object的key
    accumulator[element.title.toLowerCase()] = element;
    return accumulator;
  }, {});
  // console.log('wtf', test);
};
export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => { // this will go check if user ever sign out
    unsubscribe();
    resolve(userAuth);
  }, reject);
});
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => (
  auth.signInWithPopup(googleProvider)
);

export default firebase;
