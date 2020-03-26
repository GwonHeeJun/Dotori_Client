import { all, fork } from 'redux-saga/effects';

import authSaga from './auth.saga';

export const rootSaga = function* root() {
    yield all([
        fork(authSaga),
    ]);
};
