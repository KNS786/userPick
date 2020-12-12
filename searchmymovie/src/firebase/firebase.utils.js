import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDKh9Ru7MzyHdHSZIA6HTndQA7F40VZm6c",
    authDomain: "crownclothing-f2229.firebaseapp.com",
    databaseURL: "https://crownclothing-f2229.firebaseio.com",
    projectId: "crownclothing-f2229",
    storageBucket: "crownclothing-f2229.appspot.com",
    messagingSenderId: "298369519590",
    appId: "1:298369519590:web:3998da056d4e0311d09027",
    measurementId: "G-8EX0C06K80"
  };


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;