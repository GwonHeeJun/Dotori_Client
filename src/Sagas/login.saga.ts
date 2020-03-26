import {
    fork, takeLatest, put, delay,
   } from 'redux-saga/effects';
   import * as userAction from 'Actions/User.action';

   function* login() {
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

   function* watchLogin() {
     yield takeLatest(userAction.LOG_IN_REQUEST, login);
   }

   export default function* loginSaga() {
     yield fork(watchLogin);
   }
