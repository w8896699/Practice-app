import {
  takeLatest, put, all, call,
} from 'redux-saga/effects';


import UserActionTypes from './user.types';
import {
  signInSuccess, signInFailure, signOutSuccess, signOutFailure,
} from './user.action';
import {
  auth, googleProvider, createUserProfileDocument, getCurrentUser,
} from '../../firebase/filrebase.util';

export function* getSnapShotFromFireBase(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShoot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapShoot.id, ...userSnapShoot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* isUserAuth() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromFireBase(userAuth);
  } catch (error) {
    put(signInFailure(error));
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
export function* signOut() {
  try {
    yield auth.signOut();
    yield (put(signOutSuccess()));
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);// 这个地方听action, 谁叫了这个type就call this saga
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* checkUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuth);
}
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuth),
    call(onSignOutStart),
  ]);
}
