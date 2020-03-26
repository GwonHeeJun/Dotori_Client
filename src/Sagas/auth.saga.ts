import {
  fork, takeLatest, put, delay,
} from 'redux-saga/effects';
import * as userAction from 'Actions/User.action';

type LoginPayload = {
  type: String,
  payload: {
    email: String,
    password: String
  }
}

function* login(action: LoginPayload) {
  console.log(action)
  try {
    yield delay(3000);
    yield put({
      type: userAction.LOG_IN_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: userAction.LOG_IN_FAILURE,
      error: e,
    });
  }
}

type RegistPayload = {
  type: String,
  payload: {
    email: String,
    crrPassword: String,
    code: String
  }
}

function* regist(action : RegistPayload) {
  console.log(action)
  try {
    yield delay(3000);
    yield put({
      type: userAction.SIGN_UP_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: userAction.SIGN_UP_FAILURE,
      error: e,
    });
  }
}

function* watchLogin() {
  yield takeLatest(userAction.LOG_IN_REQUEST, login);
}

function* watchRegist() {
  yield takeLatest(userAction.SIGN_UP_REQUEST, regist);
}

export default function* authSaga() {
  yield fork(watchLogin);
  yield fork(watchRegist);
}
