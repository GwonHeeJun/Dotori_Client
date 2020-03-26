import { combineReducers } from 'redux';

import auth from './auth.reducer';

export const rootReducers = combineReducers({
    auth,
});

export type RootState = ReturnType<typeof rootReducers>;
