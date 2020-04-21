import {
  takeLatest, put, all, call,
} from 'redux-saga/effects';


import UserActionTypes from './user.types';
import {
  signInSuccess, signInFailure,
} from './user.action';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/filrebase.util';

export function* getSnapShotFromFireBase(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShoot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShoot.id, ...userSnapShoot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShotFromFireBase(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromFireBase(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  console.log('2123123station');
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}


export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
