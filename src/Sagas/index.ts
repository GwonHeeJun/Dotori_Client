import { all, fork } from 'redux-saga/effects';

import loginSaga from './login.saga';

export const rootSaga = function* root() {
    yield all([
        fork(loginSaga),
    ]);
};
